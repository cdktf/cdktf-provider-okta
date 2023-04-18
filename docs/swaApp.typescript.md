# `okta_swa_app`

Refer to the Terraform Registory for docs: [`okta_swa_app`](https://www.terraform.io/docs/providers/okta/r/swa_app).

# `swaApp` Submodule <a name="`swaApp` Submodule" id="@cdktf/provider-okta.swaApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SwaApp <a name="SwaApp" id="@cdktf/provider-okta.swaApp.SwaApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/swa_app okta_swa_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

new swaApp.SwaApp(scope: Construct, id: string, config: SwaAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig">SwaAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppConfig">SwaAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetButtonField">resetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetCheckbox">resetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetPasswordField">resetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUsernameField">resetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.swaApp.SwaApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.swaApp.SwaApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.swaApp.SwaApp.putTimeouts"></a>

```typescript
public putTimeouts(value: SwaAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.swaApp.SwaApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | SwaAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.swaApp.SwaApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.swaApp.SwaApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetButtonField` <a name="resetButtonField" id="@cdktf/provider-okta.swaApp.SwaApp.resetButtonField"></a>

```typescript
public resetButtonField(): void
```

##### `resetCheckbox` <a name="resetCheckbox" id="@cdktf/provider-okta.swaApp.SwaApp.resetCheckbox"></a>

```typescript
public resetCheckbox(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.swaApp.SwaApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.swaApp.SwaApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.swaApp.SwaApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.swaApp.SwaApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.swaApp.SwaApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.swaApp.SwaApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPasswordField` <a name="resetPasswordField" id="@cdktf/provider-okta.swaApp.SwaApp.resetPasswordField"></a>

```typescript
public resetPasswordField(): void
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaApp.resetPreconfiguredApp"></a>

```typescript
public resetPreconfiguredApp(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.swaApp.SwaApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.swaApp.SwaApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.swaApp.SwaApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.swaApp.SwaApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.swaApp.SwaApp.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```

##### `resetUsernameField` <a name="resetUsernameField" id="@cdktf/provider-okta.swaApp.SwaApp.resetUsernameField"></a>

```typescript
public resetUsernameField(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.swaApp.SwaApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.swaApp.SwaApp.isConstruct"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

swaApp.SwaApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

swaApp.SwaApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

swaApp.SwaApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference">SwaAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList">SwaAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.buttonFieldInput">buttonFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.checkboxInput">checkboxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.passwordFieldInput">passwordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usernameFieldInput">usernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.buttonField">buttonField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.checkbox">checkbox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.passwordField">passwordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usernameField">usernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.swaApp.SwaApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.swaApp.SwaApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.swaApp.SwaApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.swaApp.SwaApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.swaApp.SwaApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.swaApp.SwaApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.swaApp.SwaApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.swaApp.SwaApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.swaApp.SwaApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.swaApp.SwaApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.swaApp.SwaApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.swaApp.SwaApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.swaApp.SwaApp.property.timeouts"></a>

```typescript
public readonly timeouts: SwaAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference">SwaAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.swaApp.SwaApp.property.users"></a>

```typescript
public readonly users: SwaAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList">SwaAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonFieldInput`<sup>Optional</sup> <a name="buttonFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.buttonFieldInput"></a>

```typescript
public readonly buttonFieldInput: string;
```

- *Type:* string

---

##### `checkboxInput`<sup>Optional</sup> <a name="checkboxInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.checkboxInput"></a>

```typescript
public readonly checkboxInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.passwordFieldInput"></a>

```typescript
public readonly passwordFieldInput: string;
```

- *Type:* string

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredAppInput"></a>

```typescript
public readonly preconfiguredAppInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SwaAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.usernameFieldInput"></a>

```typescript
public readonly usernameFieldInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | SwaAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.swaApp.SwaApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonField`<sup>Required</sup> <a name="buttonField" id="@cdktf/provider-okta.swaApp.SwaApp.property.buttonField"></a>

```typescript
public readonly buttonField: string;
```

- *Type:* string

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.swaApp.SwaApp.property.checkbox"></a>

```typescript
public readonly checkbox: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.swaApp.SwaApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.swaApp.SwaApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.swaApp.SwaApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.swaApp.SwaApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.swaApp.SwaApp.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.swaApp.SwaApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.swaApp.SwaApp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.swaApp.SwaApp.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.swaApp.SwaApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SwaAppConfig <a name="SwaAppConfig" id="@cdktf/provider-okta.swaApp.SwaAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppConfig.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

const swaAppConfig: swaApp.SwaAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.buttonField">buttonField</a></code> | <code>string</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.checkbox">checkbox</a></code> | <code>string</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.passwordField">passwordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.url">url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.urlRegex">urlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.usernameField">usernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#label SwaApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_error_redirect_url SwaApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_login_redirect_url SwaApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_self_service SwaApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#admin_note SwaApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#app_links_json SwaApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#auto_submit_toolbar SwaApp#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.buttonField"></a>

```typescript
public readonly buttonField: string;
```

- *Type:* string

Login button field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#button_field SwaApp#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.checkbox"></a>

```typescript
public readonly checkbox: string;
```

- *Type:* string

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#checkbox SwaApp#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#enduser_note SwaApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#groups SwaApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_ios SwaApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_web SwaApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#logo SwaApp#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password_field SwaApp#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#preconfigured_app SwaApp#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#redirect_url SwaApp#redirect_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_groups SwaApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_users SwaApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#status SwaApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SwaAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#timeouts SwaApp#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url SwaApp#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url_regex SwaApp#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username_field SwaApp#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template SwaApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_push_status SwaApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_suffix SwaApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_type SwaApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | SwaAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#users SwaApp#users}

---

### SwaAppTimeouts <a name="SwaAppTimeouts" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

const swaAppTimeouts: swaApp.SwaAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#create SwaApp#create}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#read SwaApp#read}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#update SwaApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#create SwaApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#read SwaApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#update SwaApp#update}.

---

### SwaAppUsers <a name="SwaAppUsers" id="@cdktf/provider-okta.swaApp.SwaAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppUsers.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

const swaAppUsers: swaApp.SwaAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password SwaApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username SwaApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SwaAppTimeoutsOutputReference <a name="SwaAppTimeoutsOutputReference" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

new swaApp.SwaAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SwaAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> | cdktf.IResolvable

---


### SwaAppUsersList <a name="SwaAppUsersList" id="@cdktf/provider-okta.swaApp.SwaAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

new swaApp.SwaAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.get"></a>

```typescript
public get(index: number): SwaAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SwaAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>[]

---


### SwaAppUsersOutputReference <a name="SwaAppUsersOutputReference" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer"></a>

```typescript
import { swaApp } from '@cdktf/provider-okta'

new swaApp.SwaAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SwaAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a> | cdktf.IResolvable

---



