# `okta_three_field_app`

Refer to the Terraform Registory for docs: [`okta_three_field_app`](https://www.terraform.io/docs/providers/okta/r/three_field_app).

# `threeFieldApp` Submodule <a name="`threeFieldApp` Submodule" id="@cdktf/provider-okta.threeFieldApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThreeFieldApp <a name="ThreeFieldApp" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/three_field_app okta_three_field_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

new threeFieldApp.ThreeFieldApp(scope: Construct, id: string, config: ThreeFieldAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig">ThreeFieldAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig">ThreeFieldAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme">resetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword">resetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts"></a>

```typescript
public putTimeouts(value: ThreeFieldAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | ThreeFieldAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetCredentialsScheme` <a name="resetCredentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme"></a>

```typescript
public resetCredentialsScheme(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetRevealPassword` <a name="resetRevealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword"></a>

```typescript
public resetRevealPassword(): void
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword"></a>

```typescript
public resetSharedPassword(): void
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername"></a>

```typescript
public resetSharedUsername(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

threeFieldApp.ThreeFieldApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

threeFieldApp.ThreeFieldApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

threeFieldApp.ThreeFieldApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput">buttonSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput">credentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput">extraFieldSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput">extraFieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput">passwordSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput">revealPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput">usernameSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector">buttonSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector">extraFieldSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue">extraFieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector">passwordSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector">usernameSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts"></a>

```typescript
public readonly timeouts: ThreeFieldAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users"></a>

```typescript
public readonly users: ThreeFieldAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonSelectorInput`<sup>Optional</sup> <a name="buttonSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput"></a>

```typescript
public readonly buttonSelectorInput: string;
```

- *Type:* string

---

##### `credentialsSchemeInput`<sup>Optional</sup> <a name="credentialsSchemeInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput"></a>

```typescript
public readonly credentialsSchemeInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `extraFieldSelectorInput`<sup>Optional</sup> <a name="extraFieldSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput"></a>

```typescript
public readonly extraFieldSelectorInput: string;
```

- *Type:* string

---

##### `extraFieldValueInput`<sup>Optional</sup> <a name="extraFieldValueInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput"></a>

```typescript
public readonly extraFieldValueInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `passwordSelectorInput`<sup>Optional</sup> <a name="passwordSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput"></a>

```typescript
public readonly passwordSelectorInput: string;
```

- *Type:* string

---

##### `revealPasswordInput`<sup>Optional</sup> <a name="revealPasswordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput"></a>

```typescript
public readonly revealPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput"></a>

```typescript
public readonly sharedPasswordInput: string;
```

- *Type:* string

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput"></a>

```typescript
public readonly sharedUsernameInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ThreeFieldAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `usernameSelectorInput`<sup>Optional</sup> <a name="usernameSelectorInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput"></a>

```typescript
public readonly usernameSelectorInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | ThreeFieldAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonSelector`<sup>Required</sup> <a name="buttonSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector"></a>

```typescript
public readonly buttonSelector: string;
```

- *Type:* string

---

##### `credentialsScheme`<sup>Required</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `extraFieldSelector`<sup>Required</sup> <a name="extraFieldSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector"></a>

```typescript
public readonly extraFieldSelector: string;
```

- *Type:* string

---

##### `extraFieldValue`<sup>Required</sup> <a name="extraFieldValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue"></a>

```typescript
public readonly extraFieldValue: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `passwordSelector`<sup>Required</sup> <a name="passwordSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector"></a>

```typescript
public readonly passwordSelector: string;
```

- *Type:* string

---

##### `revealPassword`<sup>Required</sup> <a name="revealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `usernameSelector`<sup>Required</sup> <a name="usernameSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector"></a>

```typescript
public readonly usernameSelector: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThreeFieldAppConfig <a name="ThreeFieldAppConfig" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

const threeFieldAppConfig: threeFieldApp.ThreeFieldAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector">buttonSelector</a></code> | <code>string</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector">extraFieldSelector</a></code> | <code>string</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue">extraFieldValue</a></code> | <code>string</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector">passwordSelector</a></code> | <code>string</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url">url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector">usernameSelector</a></code> | <code>string</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex">urlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buttonSelector`<sup>Required</sup> <a name="buttonSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector"></a>

```typescript
public readonly buttonSelector: string;
```

- *Type:* string

Login button field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#button_selector ThreeFieldApp#button_selector}

---

##### `extraFieldSelector`<sup>Required</sup> <a name="extraFieldSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector"></a>

```typescript
public readonly extraFieldSelector: string;
```

- *Type:* string

Extra field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_selector ThreeFieldApp#extra_field_selector}

---

##### `extraFieldValue`<sup>Required</sup> <a name="extraFieldValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue"></a>

```typescript
public readonly extraFieldValue: string;
```

- *Type:* string

Value for extra form field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_value ThreeFieldApp#extra_field_value}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#label ThreeFieldApp#label}

---

##### `passwordSelector`<sup>Required</sup> <a name="passwordSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector"></a>

```typescript
public readonly passwordSelector: string;
```

- *Type:* string

Login password field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password_selector ThreeFieldApp#password_selector}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url ThreeFieldApp#url}

---

##### `usernameSelector`<sup>Required</sup> <a name="usernameSelector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector"></a>

```typescript
public readonly usernameSelector: string;
```

- *Type:* string

Login username field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username_selector ThreeFieldApp#username_selector}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_error_redirect_url ThreeFieldApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_login_redirect_url ThreeFieldApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_self_service ThreeFieldApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#admin_note ThreeFieldApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#app_links_json ThreeFieldApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#auto_submit_toolbar ThreeFieldApp#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#credentials_scheme ThreeFieldApp#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#enduser_note ThreeFieldApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#groups ThreeFieldApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_ios ThreeFieldApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_web ThreeFieldApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#logo ThreeFieldApp#logo}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#reveal_password ThreeFieldApp#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_password ThreeFieldApp#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_username ThreeFieldApp#shared_username}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_groups ThreeFieldApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_users ThreeFieldApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#status ThreeFieldApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ThreeFieldAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#timeouts ThreeFieldApp#timeouts}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url_regex ThreeFieldApp#url_regex}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template ThreeFieldApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_push_status ThreeFieldApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_suffix ThreeFieldApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_type ThreeFieldApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | ThreeFieldAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#users ThreeFieldApp#users}

---

### ThreeFieldAppTimeouts <a name="ThreeFieldAppTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

const threeFieldAppTimeouts: threeFieldApp.ThreeFieldAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}.

---

### ThreeFieldAppUsers <a name="ThreeFieldAppUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

const threeFieldAppUsers: threeFieldApp.ThreeFieldAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password ThreeFieldApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username ThreeFieldApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ThreeFieldAppTimeoutsOutputReference <a name="ThreeFieldAppTimeoutsOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

new threeFieldApp.ThreeFieldAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ThreeFieldAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a> | cdktf.IResolvable

---


### ThreeFieldAppUsersList <a name="ThreeFieldAppUsersList" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

new threeFieldApp.ThreeFieldAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get"></a>

```typescript
public get(index: number): ThreeFieldAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ThreeFieldAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>[]

---


### ThreeFieldAppUsersOutputReference <a name="ThreeFieldAppUsersOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer"></a>

```typescript
import { threeFieldApp } from '@cdktf/provider-okta'

new threeFieldApp.ThreeFieldAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ThreeFieldAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a> | cdktf.IResolvable

---



