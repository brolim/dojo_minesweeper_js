load('spec/support/env.js')
Envjs('spec/fixtures/foo.html')
load('spec/support/jquery.js')

load('spec/lib/jspec.js')
load('spec/lib/jspec.xhr.js')
load('spec/lib/jspec.jquery.js')

load('lib/minesweeper.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
.report()

