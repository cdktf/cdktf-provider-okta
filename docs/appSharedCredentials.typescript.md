# `appSharedCredentials` Submodule <a name="`appSharedCredentials` Submodule" id="@cdktf/provider-okta.appSharedCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSharedCredentials <a name="AppSharedCredentials" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials okta_app_shared_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

new appSharedCredentials.AppSharedCredentials(scope: Construct, id: string, config: AppSharedCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig">AppSharedCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig">AppSharedCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField">resetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox">resetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField">resetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField">resetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts"></a>

```typescript
public putTimeouts(value: AppSharedCredentialsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetButtonField` <a name="resetButtonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField"></a>

```typescript
public resetButtonField(): void
```

##### `resetCheckbox` <a name="resetCheckbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox"></a>

```typescript
public resetCheckbox(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPasswordField` <a name="resetPasswordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField"></a>

```typescript
public resetPasswordField(): void
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp"></a>

```typescript
public resetPreconfiguredApp(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword"></a>

```typescript
public resetSharedPassword(): void
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername"></a>

```typescript
public resetSharedUsername(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```

##### `resetUsernameField` <a name="resetUsernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField"></a>

```typescript
public resetUsernameField(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSharedCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

appSharedCredentials.AppSharedCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

appSharedCredentials.AppSharedCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

appSharedCredentials.AppSharedCredentials.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

appSharedCredentials.AppSharedCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppSharedCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSharedCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSharedCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSharedCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput">buttonFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput">checkboxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput">passwordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput">usernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField">buttonField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox">checkbox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField">passwordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField">usernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts"></a>

```typescript
public readonly timeouts: AppSharedCredentialsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonFieldInput`<sup>Optional</sup> <a name="buttonFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput"></a>

```typescript
public readonly buttonFieldInput: string;
```

- *Type:* string

---

##### `checkboxInput`<sup>Optional</sup> <a name="checkboxInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput"></a>

```typescript
public readonly checkboxInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput"></a>

```typescript
public readonly passwordFieldInput: string;
```

- *Type:* string

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput"></a>

```typescript
public readonly preconfiguredAppInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput"></a>

```typescript
public readonly sharedPasswordInput: string;
```

- *Type:* string

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput"></a>

```typescript
public readonly sharedUsernameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppSharedCredentialsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput"></a>

```typescript
public readonly usernameFieldInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buttonField`<sup>Required</sup> <a name="buttonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField"></a>

```typescript
public readonly buttonField: string;
```

- *Type:* string

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox"></a>

```typescript
public readonly checkbox: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSharedCredentialsConfig <a name="AppSharedCredentialsConfig" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.Initializer"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

const appSharedCredentialsConfig: appSharedCredentials.AppSharedCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField">buttonField</a></code> | <code>string</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox">checkbox</a></code> | <code>string</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField">passwordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url">url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex">urlRegex</a></code> | <code>string</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField">usernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField"></a>

```typescript
public readonly buttonField: string;
```

- *Type:* string

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox"></a>

```typescript
public readonly checkbox: string;
```

- *Type:* string

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppSharedCredentialsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

### AppSharedCredentialsTimeouts <a name="AppSharedCredentialsTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.Initializer"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

const appSharedCredentialsTimeouts: appSharedCredentials.AppSharedCredentialsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#create AppSharedCredentials#create}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#read AppSharedCredentials#read}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#update AppSharedCredentials#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#create AppSharedCredentials#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#read AppSharedCredentials#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_shared_credentials#update AppSharedCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSharedCredentialsTimeoutsOutputReference <a name="AppSharedCredentialsTimeoutsOutputReference" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer"></a>

```typescript
import { appSharedCredentials } from '@cdktf/provider-okta'

new appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSharedCredentialsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---



