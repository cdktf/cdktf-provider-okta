# `okta_secure_password_store_app`

Refer to the Terraform Registory for docs: [`okta_secure_password_store_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app).

# `securePasswordStoreApp` Submodule <a name="`securePasswordStoreApp` Submodule" id="@cdktf/provider-okta.securePasswordStoreApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurePasswordStoreApp <a name="SecurePasswordStoreApp" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app okta_secure_password_store_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

new securePasswordStoreApp.SecurePasswordStoreApp(scope: Construct, id: string, config: SecurePasswordStoreAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme">resetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1">resetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value">resetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2">resetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value">resetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3">resetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value">resetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword">resetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurePasswordStoreAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | SecurePasswordStoreAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetCredentialsScheme` <a name="resetCredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme"></a>

```typescript
public resetCredentialsScheme(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetOptionalField1` <a name="resetOptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1"></a>

```typescript
public resetOptionalField1(): void
```

##### `resetOptionalField1Value` <a name="resetOptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value"></a>

```typescript
public resetOptionalField1Value(): void
```

##### `resetOptionalField2` <a name="resetOptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2"></a>

```typescript
public resetOptionalField2(): void
```

##### `resetOptionalField2Value` <a name="resetOptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value"></a>

```typescript
public resetOptionalField2Value(): void
```

##### `resetOptionalField3` <a name="resetOptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3"></a>

```typescript
public resetOptionalField3(): void
```

##### `resetOptionalField3Value` <a name="resetOptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value"></a>

```typescript
public resetOptionalField3Value(): void
```

##### `resetRevealPassword` <a name="resetRevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword"></a>

```typescript
public resetRevealPassword(): void
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword"></a>

```typescript
public resetSharedPassword(): void
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername"></a>

```typescript
public resetSharedUsername(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

securePasswordStoreApp.SecurePasswordStoreApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput">credentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input">optionalField1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput">optionalField1ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input">optionalField2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput">optionalField2ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input">optionalField3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput">optionalField3ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput">passwordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput">revealPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput">usernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1">optionalField1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value">optionalField1Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2">optionalField2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value">optionalField2Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3">optionalField3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value">optionalField3Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField">passwordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField">usernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts"></a>

```typescript
public readonly timeouts: SecurePasswordStoreAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users"></a>

```typescript
public readonly users: SecurePasswordStoreAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsSchemeInput`<sup>Optional</sup> <a name="credentialsSchemeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput"></a>

```typescript
public readonly credentialsSchemeInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `optionalField1Input`<sup>Optional</sup> <a name="optionalField1Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input"></a>

```typescript
public readonly optionalField1Input: string;
```

- *Type:* string

---

##### `optionalField1ValueInput`<sup>Optional</sup> <a name="optionalField1ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput"></a>

```typescript
public readonly optionalField1ValueInput: string;
```

- *Type:* string

---

##### `optionalField2Input`<sup>Optional</sup> <a name="optionalField2Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input"></a>

```typescript
public readonly optionalField2Input: string;
```

- *Type:* string

---

##### `optionalField2ValueInput`<sup>Optional</sup> <a name="optionalField2ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput"></a>

```typescript
public readonly optionalField2ValueInput: string;
```

- *Type:* string

---

##### `optionalField3Input`<sup>Optional</sup> <a name="optionalField3Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input"></a>

```typescript
public readonly optionalField3Input: string;
```

- *Type:* string

---

##### `optionalField3ValueInput`<sup>Optional</sup> <a name="optionalField3ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput"></a>

```typescript
public readonly optionalField3ValueInput: string;
```

- *Type:* string

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput"></a>

```typescript
public readonly passwordFieldInput: string;
```

- *Type:* string

---

##### `revealPasswordInput`<sup>Optional</sup> <a name="revealPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput"></a>

```typescript
public readonly revealPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput"></a>

```typescript
public readonly sharedPasswordInput: string;
```

- *Type:* string

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput"></a>

```typescript
public readonly sharedUsernameInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SecurePasswordStoreAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput"></a>

```typescript
public readonly usernameFieldInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | SecurePasswordStoreAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsScheme`<sup>Required</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `optionalField1`<sup>Required</sup> <a name="optionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1"></a>

```typescript
public readonly optionalField1: string;
```

- *Type:* string

---

##### `optionalField1Value`<sup>Required</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value"></a>

```typescript
public readonly optionalField1Value: string;
```

- *Type:* string

---

##### `optionalField2`<sup>Required</sup> <a name="optionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2"></a>

```typescript
public readonly optionalField2: string;
```

- *Type:* string

---

##### `optionalField2Value`<sup>Required</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value"></a>

```typescript
public readonly optionalField2Value: string;
```

- *Type:* string

---

##### `optionalField3`<sup>Required</sup> <a name="optionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3"></a>

```typescript
public readonly optionalField3: string;
```

- *Type:* string

---

##### `optionalField3Value`<sup>Required</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value"></a>

```typescript
public readonly optionalField3Value: string;
```

- *Type:* string

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

---

##### `revealPassword`<sup>Required</sup> <a name="revealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurePasswordStoreAppConfig <a name="SecurePasswordStoreAppConfig" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

const securePasswordStoreAppConfig: securePasswordStoreApp.SecurePasswordStoreAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField">passwordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url">url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField">usernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme">credentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1">optionalField1</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value">optionalField1Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2">optionalField2</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value">optionalField2Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3">optionalField3</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value">optionalField3Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword">revealPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword">sharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername">sharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField"></a>

```typescript
public readonly passwordField: string;
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField"></a>

```typescript
public readonly usernameField: string;
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme"></a>

```typescript
public readonly credentialsScheme: string;
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `optionalField1`<sup>Optional</sup> <a name="optionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1"></a>

```typescript
public readonly optionalField1: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `optionalField1Value`<sup>Optional</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value"></a>

```typescript
public readonly optionalField1Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `optionalField2`<sup>Optional</sup> <a name="optionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2"></a>

```typescript
public readonly optionalField2: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `optionalField2Value`<sup>Optional</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value"></a>

```typescript
public readonly optionalField2Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `optionalField3`<sup>Optional</sup> <a name="optionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3"></a>

```typescript
public readonly optionalField3: string;
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `optionalField3Value`<sup>Optional</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value"></a>

```typescript
public readonly optionalField3Value: string;
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword"></a>

```typescript
public readonly revealPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword"></a>

```typescript
public readonly sharedPassword: string;
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername"></a>

```typescript
public readonly sharedUsername: string;
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurePasswordStoreAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | SecurePasswordStoreAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#users SecurePasswordStoreApp#users}

---

### SecurePasswordStoreAppTimeouts <a name="SecurePasswordStoreAppTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

const securePasswordStoreAppTimeouts: securePasswordStoreApp.SecurePasswordStoreAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

### SecurePasswordStoreAppUsers <a name="SecurePasswordStoreAppUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

const securePasswordStoreAppUsers: securePasswordStoreApp.SecurePasswordStoreAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password SecurePasswordStoreApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username SecurePasswordStoreApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurePasswordStoreAppTimeoutsOutputReference <a name="SecurePasswordStoreAppTimeoutsOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

new securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurePasswordStoreAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> | cdktf.IResolvable

---


### SecurePasswordStoreAppUsersList <a name="SecurePasswordStoreAppUsersList" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

new securePasswordStoreApp.SecurePasswordStoreAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get"></a>

```typescript
public get(index: number): SecurePasswordStoreAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurePasswordStoreAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>[]

---


### SecurePasswordStoreAppUsersOutputReference <a name="SecurePasswordStoreAppUsersOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer"></a>

```typescript
import { securePasswordStoreApp } from '@cdktf/provider-okta'

new securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurePasswordStoreAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a> | cdktf.IResolvable

---



