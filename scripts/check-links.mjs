import { projects } from '../src/data/projects.js'

// Run explicitly with network access; ordinary tests remain offline and deterministic.
let failures = 0
async function check(url, label) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    console.log(`PASS ${label}: ${response.status} ${response.url}`)
    return await response.text()
  } catch (error) {
    failures++
    console.error(`FAIL ${label}: ${url} — ${error.message}`)
    return null
  }
}
for (const project of projects) {
  const html = await check(project.live, `${project.title} demo`)
  await check(project.source, `${project.title} source`)
  if (html !== null) {
    const assets = [...html.matchAll(/(?:src|href)="([^" ]+\.(?:js|css))"/g)].map(match => match[1])
    if (!assets.some(asset => asset.endsWith('.js'))) {
      failures++
      console.error(`FAIL ${project.title}: no JavaScript entry found; check for a hosting error page`)
    }
    for (const asset of new Set(assets)) await check(new URL(asset, project.live), `${project.title} asset`)
  }
}
process.exitCode = failures ? 1 : 0
