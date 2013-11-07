
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

lint:
	@jshint --verbose *.js *.json lib test

test: lint
	@mocha -R spec

.PHONY: clean
