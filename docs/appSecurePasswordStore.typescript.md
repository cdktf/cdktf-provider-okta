# `appSecurePasswordStore` Submodule <a name="`appSecurePasswordStore` Submodule" id="@cdktf/provider-okta.appSecurePasswordStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSecurePasswordStore <a name="AppSecurePasswordStore" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store okta_app_secure_password_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

new appSecurePasswordStore.AppSecurePasswordStore(scope: Construct, id: string, config: AppSecurePasswordStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme">resetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1">resetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value">resetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2">resetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value">resetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3">resetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value">resetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword">resetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts"></a>

```typescript
public putTimeouts(value: AppSecurePasswordStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetCredentialsScheme` <a name="resetCredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme"></a>

```typescript
public resetCredentialsScheme(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetOptionalField1` <a name="resetOptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1"></a>

```typescript
public resetOptionalField1(): void
```

##### `resetOptionalField1Value` <a name="resetOptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value"></a>

```typescript
public resetOptionalField1Value(): void
```

##### `resetOptionalField2` <a name="resetOptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2"></a>

```typescript
public resetOptionalField2(): void
```

##### `resetOptionalField2Value` <a name="resetOptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value"></a>

```typescript
public resetOptionalField2Value(): void
```

##### `resetOptionalField3` <a name="resetOptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3"></a>

```typescript
public resetOptionalField3(): void
```

##### `resetOptionalField3Value` <a name="resetOptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value"></a>

```typescript
public resetOptionalField3Value(): void
```

##### `resetRevealPassword` <a name="resetRevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword"></a>

```typescript
public resetRevealPassword(): void
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword"></a>

```typescript
public resetSharedPassword(): void
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername"></a>

```typescript
public resetSharedUsername(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

appSecurePasswordStore.AppSecurePasswordStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSecurePasswordStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSecurePasswordStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSecurePasswordStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput">credentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input">optionalField1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput">optionalField1ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input">optionalField2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput">optionalField2ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input">optionalField3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput">optionalField3ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput">passwordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput">revealPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput">usernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1">optionalField1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value">optionalField1Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2">optionalField2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value">optionalField2Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3">optionalField3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value">optionalField3Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField">passwordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField">usernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts"></a>

```typescript
public readonly timeouts: AppSecurePasswordStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsSchemeInput`<sup>Optional</sup> <a name="credentialsSchemeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput"></a>

```typescript
public readonly credentialsSchemeInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `optionalField1Input`<sup>Optional</sup> <a name="optionalField1Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input"></a>

```typescript
public readonly optionalField1Input: string;
```

- *Type:* string

---

##### `optionalField1ValueInput`<sup>Optional</sup> <a name="optionalField1ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput"></a>

```typescript
public readonly optionalField1ValueInput: string;
```

- *Type:* string

---

##### `optionalField2Input`<sup>Optional</sup> <a name="optionalField2Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input"></a>

```typescript
public readonly optionalField2Input: string;
```

- *Type:* string

---

##### `optionalField2ValueInput`<sup>Optional</sup> <a name="optionalField2ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput"></a>

```typescript
public readonly optionalField2ValueInput: string;
```

- *Type:* string

---

##### `optionalField3Input`<sup>Optional</sup> <a name="optionalField3Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input"></a>

```typescript
public readonly optionalField3Input: string;
```

- *Type:* string

---

##### `optionalField3ValueInput`<sup>Optional</sup> <a name="optionalField3ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput"></a>

```typescript
public readonly optionalField3ValueInput: string;
```

- *Type:* string

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput"></a>

```typescript
public readonly passwordFieldInput: string;
```

- *Type:* string

---

##### `revealPasswordInput`<sup>Optional</sup> <a name="revealPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput"></a>

```typescript
public readonly revealPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput"></a>

```typescript
public readonly sharedPasswordInput: string;
```

- *Type:* string

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput"></a>

```typescript
public readonly sharedUsernameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppSecurePasswordStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput"></a>

```typescript
public readonly usernameFieldInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsScheme`<sup>Required</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `optionalField1`<sup>Required</sup> <a name="optionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1"></a>

```typescript
public readonly optionalField1: string;
```

- *Type:* string

---

##### `optionalField1Value`<sup>Required</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value"></a>

```typescript
public readonly optionalField1Value: string;
```

- *Type:* string

---

##### `optionalField2`<sup>Required</sup> <a name="optionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2"></a>

```typescript
public readonly optionalField2: string;
```

- *Type:* string

---

##### `optionalField2Value`<sup>Required</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value"></a>

```typescript
public readonly optionalField2Value: string;
```

- *Type:* string

---

##### `optionalField3`<sup>Required</sup> <a name="optionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3"></a>

```typescript
public readonly optionalField3: string;
```

- *Type:* string

---

##### `optionalField3Value`<sup>Required</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value"></a>

```typescript
public readonly optionalField3Value: string;
```

- *Type:* string

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

---

##### `revealPassword`<sup>Required</sup> <a name="revealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSecurePasswordStoreConfig <a name="AppSecurePasswordStoreConfig" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.Initializer"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

const appSecurePasswordStoreConfig: appSecurePasswordStore.AppSecurePasswordStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField">passwordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url">url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField">usernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1">optionalField1</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value">optionalField1Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2">optionalField2</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value">optionalField2Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3">optionalField3</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value">optionalField3Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#label AppSecurePasswordStore#label}

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#password_field AppSecurePasswordStore#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#url AppSecurePasswordStore#url}

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#username_field AppSecurePasswordStore#username_field}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#logo AppSecurePasswordStore#logo}

---

##### `optionalField1`<sup>Optional</sup> <a name="optionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1"></a>

```typescript
public readonly optionalField1: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}

---

##### `optionalField1Value`<sup>Optional</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value"></a>

```typescript
public readonly optionalField1Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}

---

##### `optionalField2`<sup>Optional</sup> <a name="optionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2"></a>

```typescript
public readonly optionalField2: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}

---

##### `optionalField2Value`<sup>Optional</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value"></a>

```typescript
public readonly optionalField2Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}

---

##### `optionalField3`<sup>Optional</sup> <a name="optionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3"></a>

```typescript
public readonly optionalField3: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}

---

##### `optionalField3Value`<sup>Optional</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value"></a>

```typescript
public readonly optionalField3Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#status AppSecurePasswordStore#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppSecurePasswordStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}

---

### AppSecurePasswordStoreTimeouts <a name="AppSecurePasswordStoreTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.Initializer"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

const appSecurePasswordStoreTimeouts: appSecurePasswordStore.AppSecurePasswordStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSecurePasswordStoreTimeoutsOutputReference <a name="AppSecurePasswordStoreTimeoutsOutputReference" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { appSecurePasswordStore } from '@cdktf/provider-okta'

new appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSecurePasswordStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

---



