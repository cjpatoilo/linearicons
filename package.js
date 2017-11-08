Package.describe({
	name: "cjpatoilo:linearicons",
	version: "1.0.1",
	summary: "Linearicons is the highest quality set of line icons, matching with minimalist UI designs in iOS.",
	git: "https://github.com/cjpatoilo/linearicons.git",
	documentation: "README.md"
});

Package.onUse(function(api) {
	api.versionsFrom("METEOR@1.0");
	api.addFiles([
		"dist/web-font/style.css"
	], "client");
});
