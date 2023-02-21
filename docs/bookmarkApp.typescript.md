# `bookmarkApp` Submodule <a name="`bookmarkApp` Submodule" id="@cdktf/provider-okta.bookmarkApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BookmarkApp <a name="BookmarkApp" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app okta_bookmark_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

new bookmarkApp.BookmarkApp(scope: Construct, id: string, config: BookmarkAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig">BookmarkAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig">BookmarkAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration">resetRequestIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts"></a>

```typescript
public putTimeouts(value: BookmarkAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | BookmarkAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy"></a>

```typescript
public resetAuthenticationPolicy(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetRequestIntegration` <a name="resetRequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration"></a>

```typescript
public resetRequestIntegration(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

bookmarkApp.BookmarkApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

bookmarkApp.BookmarkApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

bookmarkApp.BookmarkApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput">requestIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration">requestIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts"></a>

```typescript
public readonly timeouts: BookmarkAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users"></a>

```typescript
public readonly users: BookmarkAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `requestIntegrationInput`<sup>Optional</sup> <a name="requestIntegrationInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput"></a>

```typescript
public readonly requestIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: BookmarkAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | BookmarkAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `requestIntegration`<sup>Required</sup> <a name="requestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration"></a>

```typescript
public readonly requestIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BookmarkAppConfig <a name="BookmarkAppConfig" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

const bookmarkAppConfig: bookmarkApp.BookmarkAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration">requestIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#label BookmarkApp#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}.

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_error_redirect_url BookmarkApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_login_redirect_url BookmarkApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_self_service BookmarkApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#admin_note BookmarkApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#app_links_json BookmarkApp#app_links_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#authentication_policy BookmarkApp#authentication_policy}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#auto_submit_toolbar BookmarkApp#auto_submit_toolbar}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#enduser_note BookmarkApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#groups BookmarkApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_ios BookmarkApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_web BookmarkApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#logo BookmarkApp#logo}

---

##### `requestIntegration`<sup>Optional</sup> <a name="requestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration"></a>

```typescript
public readonly requestIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}.

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_groups BookmarkApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_users BookmarkApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#status BookmarkApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BookmarkAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#timeouts BookmarkApp#timeouts}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | BookmarkAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#users BookmarkApp#users}

---

### BookmarkAppTimeouts <a name="BookmarkAppTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

const bookmarkAppTimeouts: bookmarkApp.BookmarkAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}.

---

### BookmarkAppUsers <a name="BookmarkAppUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

const bookmarkAppUsers: bookmarkApp.BookmarkAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#password BookmarkApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#username BookmarkApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### BookmarkAppTimeoutsOutputReference <a name="BookmarkAppTimeoutsOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

new bookmarkApp.BookmarkAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BookmarkAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> | cdktf.IResolvable

---


### BookmarkAppUsersList <a name="BookmarkAppUsersList" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

new bookmarkApp.BookmarkAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get"></a>

```typescript
public get(index: number): BookmarkAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BookmarkAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>[]

---


### BookmarkAppUsersOutputReference <a name="BookmarkAppUsersOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer"></a>

```typescript
import { bookmarkApp } from '@cdktf/provider-okta'

new bookmarkApp.BookmarkAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BookmarkAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a> | cdktf.IResolvable

---



