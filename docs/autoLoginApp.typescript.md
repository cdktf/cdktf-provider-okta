# `autoLoginApp` Submodule <a name="`autoLoginApp` Submodule" id="@cdktf/provider-okta.autoLoginApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoLoginApp <a name="AutoLoginApp" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app okta_auto_login_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

new autoLoginApp.AutoLoginApp(scope: Construct, id: string, config: AutoLoginAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig">AutoLoginAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig">AutoLoginAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetCredentialsScheme">resetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetRevealPassword">resetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSignOnRedirectUrl">resetSignOnRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSignOnUrl">resetSignOnUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putTimeouts"></a>

```typescript
public putTimeouts(value: AutoLoginAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | AutoLoginAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAppSettingsJson"></a>

```typescript
public resetAppSettingsJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetCredentialsScheme` <a name="resetCredentialsScheme" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetCredentialsScheme"></a>

```typescript
public resetCredentialsScheme(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetPreconfiguredApp"></a>

```typescript
public resetPreconfiguredApp(): void
```

##### `resetRevealPassword` <a name="resetRevealPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetRevealPassword"></a>

```typescript
public resetRevealPassword(): void
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSharedPassword"></a>

```typescript
public resetSharedPassword(): void
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSharedUsername"></a>

```typescript
public resetSharedUsername(): void
```

##### `resetSignOnRedirectUrl` <a name="resetSignOnRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSignOnRedirectUrl"></a>

```typescript
public resetSignOnRedirectUrl(): void
```

##### `resetSignOnUrl` <a name="resetSignOnUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSignOnUrl"></a>

```typescript
public resetSignOnUrl(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isConstruct"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

autoLoginApp.AutoLoginApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformElement"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

autoLoginApp.AutoLoginApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformResource"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

autoLoginApp.AutoLoginApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference">AutoLoginAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList">AutoLoginAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.credentialsSchemeInput">credentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.revealPasswordInput">revealPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnRedirectUrlInput">signOnRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnUrlInput">signOnUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnRedirectUrl">signOnRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnUrl">signOnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.timeouts"></a>

```typescript
public readonly timeouts: AutoLoginAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference">AutoLoginAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.users"></a>

```typescript
public readonly users: AutoLoginAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList">AutoLoginAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appSettingsJsonInput"></a>

```typescript
public readonly appSettingsJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsSchemeInput`<sup>Optional</sup> <a name="credentialsSchemeInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.credentialsSchemeInput"></a>

```typescript
public readonly credentialsSchemeInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.preconfiguredAppInput"></a>

```typescript
public readonly preconfiguredAppInput: string;
```

- *Type:* string

---

##### `revealPasswordInput`<sup>Optional</sup> <a name="revealPasswordInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.revealPasswordInput"></a>

```typescript
public readonly revealPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedPasswordInput"></a>

```typescript
public readonly sharedPasswordInput: string;
```

- *Type:* string

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedUsernameInput"></a>

```typescript
public readonly sharedUsernameInput: string;
```

- *Type:* string

---

##### `signOnRedirectUrlInput`<sup>Optional</sup> <a name="signOnRedirectUrlInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnRedirectUrlInput"></a>

```typescript
public readonly signOnRedirectUrlInput: string;
```

- *Type:* string

---

##### `signOnUrlInput`<sup>Optional</sup> <a name="signOnUrlInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnUrlInput"></a>

```typescript
public readonly signOnUrlInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AutoLoginAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a> | cdktf.IResolvable

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | AutoLoginAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsScheme`<sup>Required</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

---

##### `revealPassword`<sup>Required</sup> <a name="revealPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

---

##### `signOnRedirectUrl`<sup>Required</sup> <a name="signOnRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnRedirectUrl"></a>

```typescript
public readonly signOnRedirectUrl: string;
```

- *Type:* string

---

##### `signOnUrl`<sup>Required</sup> <a name="signOnUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.signOnUrl"></a>

```typescript
public readonly signOnUrl: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.autoLoginApp.AutoLoginApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoLoginAppConfig <a name="AutoLoginAppConfig" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

const autoLoginAppConfig: autoLoginApp.AutoLoginAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#id AutoLoginApp#id}. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.signOnRedirectUrl">signOnRedirectUrl</a></code> | <code>string</code> | Post login redirect URL. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.signOnUrl">signOnUrl</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#label AutoLoginApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#accessibility_error_redirect_url AutoLoginApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#accessibility_login_redirect_url AutoLoginApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#accessibility_self_service AutoLoginApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#admin_note AutoLoginApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#app_links_json AutoLoginApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#app_settings_json AutoLoginApp#app_settings_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#auto_submit_toolbar AutoLoginApp#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#credentials_scheme AutoLoginApp#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#enduser_note AutoLoginApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#groups AutoLoginApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#hide_ios AutoLoginApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#hide_web AutoLoginApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#id AutoLoginApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#logo AutoLoginApp#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#preconfigured_app AutoLoginApp#preconfigured_app}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#reveal_password AutoLoginApp#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#shared_password AutoLoginApp#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#shared_username AutoLoginApp#shared_username}

---

##### `signOnRedirectUrl`<sup>Optional</sup> <a name="signOnRedirectUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.signOnRedirectUrl"></a>

```typescript
public readonly signOnRedirectUrl: string;
```

- *Type:* string

Post login redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#sign_on_redirect_url AutoLoginApp#sign_on_redirect_url}

---

##### `signOnUrl`<sup>Optional</sup> <a name="signOnUrl" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.signOnUrl"></a>

```typescript
public readonly signOnUrl: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#sign_on_url AutoLoginApp#sign_on_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#skip_groups AutoLoginApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#skip_users AutoLoginApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#status AutoLoginApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutoLoginAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#timeouts AutoLoginApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#user_name_template AutoLoginApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#user_name_template_push_status AutoLoginApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#user_name_template_suffix AutoLoginApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#user_name_template_type AutoLoginApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | AutoLoginAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#users AutoLoginApp#users}

---

### AutoLoginAppTimeouts <a name="AutoLoginAppTimeouts" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

const autoLoginAppTimeouts: autoLoginApp.AutoLoginAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#create AutoLoginApp#create}. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#read AutoLoginApp#read}. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#update AutoLoginApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#create AutoLoginApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#read AutoLoginApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#update AutoLoginApp#update}.

---

### AutoLoginAppUsers <a name="AutoLoginAppUsers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

const autoLoginAppUsers: autoLoginApp.AutoLoginAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#id AutoLoginApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#password AutoLoginApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auto_login_app#username AutoLoginApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoLoginAppTimeoutsOutputReference <a name="AutoLoginAppTimeoutsOutputReference" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

new autoLoginApp.AutoLoginAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoLoginAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppTimeouts">AutoLoginAppTimeouts</a> | cdktf.IResolvable

---


### AutoLoginAppUsersList <a name="AutoLoginAppUsersList" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

new autoLoginApp.AutoLoginAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.get"></a>

```typescript
public get(index: number): AutoLoginAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoLoginAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a>[]

---


### AutoLoginAppUsersOutputReference <a name="AutoLoginAppUsersOutputReference" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer"></a>

```typescript
import { autoLoginApp } from '@cdktf/provider-okta'

new autoLoginApp.AutoLoginAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoLoginAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.autoLoginApp.AutoLoginAppUsers">AutoLoginAppUsers</a> | cdktf.IResolvable

---



