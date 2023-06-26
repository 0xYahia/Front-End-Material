what differfent between @import and @use in SASS?:

1: Scope Isolation:
@import: When you use @import to include a Sass file, all the styles, variables, mixins, and functions defined in the imported file become part of the global namespace.
This means that they can be accessed and used anywhere in your stylesheets.
@use: Unlike @import, @use provides module-like scoping. When you use @use to include a Sass file, its styles, variables, mixins,
and functions are encapsulated within a namespace associated with the imported file. To use the members of the imported module,
you need to refer to them explicitly using the namespace.

2: Member Access:
@import: When using @import, all the styles, variables, mixins, and functions from the imported file are automatically accessible in the importing file.
There is no need for explicit member access.
@use: With @use, you need to explicitly reference the members you want to use from the imported module by prefixing them with the namespace and a forward slash.

3: Import Once:
@import: When using @import, Sass will import the same file multiple times if you include it in multiple places. This can lead to duplicate styles and potential conflicts.
@use: In contrast, @use imports a file only once by default. If you attempt to use @use to import the same file again, it will be ignored.
This helps prevent duplication and conflicts.

4: Forward Compatibility:
@import: The @import rule has been deprecated in favor of @use. While it is still supported, it is recommended to use @use for new Sass projects and migrations.
@use: The @use rule is the recommended approach for including Sass files. It provides more control over scope, reduces conflicts, and improves modularity. Additionally,
it offers features like namespaces, module renaming, and access to members from other modules.

In summary, @import is an older way to include Sass files, operates globally, and automatically imports all styles and definitions into the current file.
On the other hand, @use provides better scoping and encapsulation, requires explicit member access, prevents duplication,
and is the recommended approach for modern Sass projects.
