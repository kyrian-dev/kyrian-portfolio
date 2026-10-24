import test from 'node:test'
import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { projects, categories } from '../src/data/projects.js'

test('project identifiers and destinations remain unique', () => {
  for (const key of ['id', 'live', 'source']) {
    assert.equal(new Set(projects.map(p => p[key])).size, projects.length, `Duplicate ${key}`)
  }
})

for (const project of projects) {
  test(`${project.title}: valid gallery data, image and destinations`, async () => {
    assert.ok(categories.includes(project.category), 'Category must be selectable')
    for (const key of ['title', 'problem', 'solution', 'capability', 'alt', 'tag', 'notes']) {
      assert.ok(typeof project[key] === 'string' && project[key].trim(), `Missing ${key}`)
    }
    for (const key of ['stack', 'features']) {
      assert.ok(Array.isArray(project[key]) && project[key].length, `Missing ${key}`)
    }
    for (const key of ['live', 'source']) assert.equal(new URL(project[key]).protocol, 'https:')
    assert.equal(new URL(project.source).hostname, 'github.com')
    assert.match(project.image, /^\/images\/[\w/-]+\.webp$/)
    await access(new URL('../public' + project.image, import.meta.url))
  })
}
