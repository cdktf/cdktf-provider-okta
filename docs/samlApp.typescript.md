# `okta_saml_app`

Refer to the Terraform Registory for docs: [`okta_saml_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app).

# `samlApp` Submodule <a name="`samlApp` Submodule" id="@cdktf/provider-okta.samlApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlApp <a name="SamlApp" id="@cdktf/provider-okta.samlApp.SamlApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app okta_saml_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlApp(scope: Construct, id: string, config: SamlAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements">putAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints">resetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned">resetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements">resetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef">resetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm">resetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn">resetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer">resetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid">resetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed">resetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned">resetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled">resetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion">resetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate">resetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer">resetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl">resetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer">resetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat">resetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate">resetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.samlApp.SamlApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAttributeStatements` <a name="putAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements"></a>

```typescript
public putAttributeStatements(value: IResolvable | SamlAppAttributeStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts"></a>

```typescript
public putTimeouts(value: SamlAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | SamlAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAcsEndpoints` <a name="resetAcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints"></a>

```typescript
public resetAcsEndpoints(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson"></a>

```typescript
public resetAppSettingsJson(): void
```

##### `resetAssertionSigned` <a name="resetAssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned"></a>

```typescript
public resetAssertionSigned(): void
```

##### `resetAttributeStatements` <a name="resetAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements"></a>

```typescript
public resetAttributeStatements(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-okta.samlApp.SamlApp.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy"></a>

```typescript
public resetAuthenticationPolicy(): void
```

##### `resetAuthnContextClassRef` <a name="resetAuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef"></a>

```typescript
public resetAuthnContextClassRef(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState"></a>

```typescript
public resetDefaultRelayState(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-okta.samlApp.SamlApp.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDigestAlgorithm` <a name="resetDigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm"></a>

```typescript
public resetDigestAlgorithm(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetHonorForceAuthn` <a name="resetHonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn"></a>

```typescript
public resetHonorForceAuthn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.samlApp.SamlApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpIssuer` <a name="resetIdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer"></a>

```typescript
public resetIdpIssuer(): void
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment"></a>

```typescript
public resetImplicitAssignment(): void
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId"></a>

```typescript
public resetInlineHookId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKeyYearsValid` <a name="resetKeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid"></a>

```typescript
public resetKeyYearsValid(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.samlApp.SamlApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp"></a>

```typescript
public resetPreconfiguredApp(): void
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktf/provider-okta.samlApp.SamlApp.resetRecipient"></a>

```typescript
public resetRecipient(): void
```

##### `resetRequestCompressed` <a name="resetRequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed"></a>

```typescript
public resetRequestCompressed(): void
```

##### `resetResponseSigned` <a name="resetResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned"></a>

```typescript
public resetResponseSigned(): void
```

##### `resetSamlSignedRequestEnabled` <a name="resetSamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled"></a>

```typescript
public resetSamlSignedRequestEnabled(): void
```

##### `resetSamlVersion` <a name="resetSamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion"></a>

```typescript
public resetSamlVersion(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

##### `resetSingleLogoutCertificate` <a name="resetSingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate"></a>

```typescript
public resetSingleLogoutCertificate(): void
```

##### `resetSingleLogoutIssuer` <a name="resetSingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer"></a>

```typescript
public resetSingleLogoutIssuer(): void
```

##### `resetSingleLogoutUrl` <a name="resetSingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl"></a>

```typescript
public resetSingleLogoutUrl(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetSpIssuer` <a name="resetSpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer"></a>

```typescript
public resetSpIssuer(): void
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl"></a>

```typescript
public resetSsoUrl(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectNameIdFormat` <a name="resetSubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat"></a>

```typescript
public resetSubjectNameIdFormat(): void
```

##### `resetSubjectNameIdTemplate` <a name="resetSubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate"></a>

```typescript
public resetSubjectNameIdTemplate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

samlApp.SamlApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

samlApp.SamlApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

samlApp.SamlApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements">attributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl">embedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityKey">entityKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl">entityUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.features">features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding">httpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding">httpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput">acsEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput">assertionSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput">attributeStatementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput">authnContextClassRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput">digestAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput">honorForceAuthnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput">idpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput">keyYearsValidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput">recipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput">requestCompressedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput">responseSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput">samlSignedRequestEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput">samlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput">singleLogoutCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput">singleLogoutIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput">singleLogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput">spIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput">ssoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput">subjectNameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput">subjectNameIdTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints">acsEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned">assertionSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef">authnContextClassRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm">digestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn">honorForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer">idpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid">keyYearsValid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipient">recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed">requestCompressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned">responseSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion">samlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer">spIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.samlApp.SamlApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.samlApp.SamlApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributeStatements`<sup>Required</sup> <a name="attributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements"></a>

```typescript
public readonly attributeStatements: SamlAppAttributeStatementsList;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `embedUrl`<sup>Required</sup> <a name="embedUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl"></a>

```typescript
public readonly embedUrl: string;
```

- *Type:* string

---

##### `entityKey`<sup>Required</sup> <a name="entityKey" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityKey"></a>

```typescript
public readonly entityKey: string;
```

- *Type:* string

---

##### `entityUrl`<sup>Required</sup> <a name="entityUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl"></a>

```typescript
public readonly entityUrl: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.samlApp.SamlApp.property.features"></a>

```typescript
public readonly features: string[];
```

- *Type:* string[]

---

##### `httpPostBinding`<sup>Required</sup> <a name="httpPostBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding"></a>

```typescript
public readonly httpPostBinding: string;
```

- *Type:* string

---

##### `httpRedirectBinding`<sup>Required</sup> <a name="httpRedirectBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding"></a>

```typescript
public readonly httpRedirectBinding: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.samlApp.SamlApp.property.keys"></a>

```typescript
public readonly keys: SamlAppKeysList;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeouts"></a>

```typescript
public readonly timeouts: SamlAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlApp.property.users"></a>

```typescript
public readonly users: SamlAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acsEndpointsInput`<sup>Optional</sup> <a name="acsEndpointsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput"></a>

```typescript
public readonly acsEndpointsInput: string[];
```

- *Type:* string[]

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput"></a>

```typescript
public readonly appSettingsJsonInput: string;
```

- *Type:* string

---

##### `assertionSignedInput`<sup>Optional</sup> <a name="assertionSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput"></a>

```typescript
public readonly assertionSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributeStatementsInput`<sup>Optional</sup> <a name="attributeStatementsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput"></a>

```typescript
public readonly attributeStatementsInput: IResolvable | SamlAppAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `authnContextClassRefInput`<sup>Optional</sup> <a name="authnContextClassRefInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput"></a>

```typescript
public readonly authnContextClassRefInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput"></a>

```typescript
public readonly defaultRelayStateInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `digestAlgorithmInput`<sup>Optional</sup> <a name="digestAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput"></a>

```typescript
public readonly digestAlgorithmInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `honorForceAuthnInput`<sup>Optional</sup> <a name="honorForceAuthnInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput"></a>

```typescript
public readonly honorForceAuthnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpIssuerInput`<sup>Optional</sup> <a name="idpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput"></a>

```typescript
public readonly idpIssuerInput: string;
```

- *Type:* string

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput"></a>

```typescript
public readonly implicitAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput"></a>

```typescript
public readonly inlineHookIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyYearsValidInput`<sup>Optional</sup> <a name="keyYearsValidInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput"></a>

```typescript
public readonly keyYearsValidInput: number;
```

- *Type:* number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput"></a>

```typescript
public readonly preconfiguredAppInput: string;
```

- *Type:* string

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput"></a>

```typescript
public readonly recipientInput: string;
```

- *Type:* string

---

##### `requestCompressedInput`<sup>Optional</sup> <a name="requestCompressedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput"></a>

```typescript
public readonly requestCompressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseSignedInput`<sup>Optional</sup> <a name="responseSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput"></a>

```typescript
public readonly responseSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlSignedRequestEnabledInput`<sup>Optional</sup> <a name="samlSignedRequestEnabledInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput"></a>

```typescript
public readonly samlSignedRequestEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlVersionInput`<sup>Optional</sup> <a name="samlVersionInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput"></a>

```typescript
public readonly samlVersionInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `singleLogoutCertificateInput`<sup>Optional</sup> <a name="singleLogoutCertificateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput"></a>

```typescript
public readonly singleLogoutCertificateInput: string;
```

- *Type:* string

---

##### `singleLogoutIssuerInput`<sup>Optional</sup> <a name="singleLogoutIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput"></a>

```typescript
public readonly singleLogoutIssuerInput: string;
```

- *Type:* string

---

##### `singleLogoutUrlInput`<sup>Optional</sup> <a name="singleLogoutUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput"></a>

```typescript
public readonly singleLogoutUrlInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spIssuerInput`<sup>Optional</sup> <a name="spIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput"></a>

```typescript
public readonly spIssuerInput: string;
```

- *Type:* string

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput"></a>

```typescript
public readonly ssoUrlInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectNameIdFormatInput`<sup>Optional</sup> <a name="subjectNameIdFormatInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput"></a>

```typescript
public readonly subjectNameIdFormatInput: string;
```

- *Type:* string

---

##### `subjectNameIdTemplateInput`<sup>Optional</sup> <a name="subjectNameIdTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput"></a>

```typescript
public readonly subjectNameIdTemplateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SamlAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> | cdktf.IResolvable

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | SamlAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acsEndpoints`<sup>Required</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints"></a>

```typescript
public readonly acsEndpoints: string[];
```

- *Type:* string[]

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

---

##### `assertionSigned`<sup>Required</sup> <a name="assertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned"></a>

```typescript
public readonly assertionSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlApp.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `authnContextClassRef`<sup>Required</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef"></a>

```typescript
public readonly authnContextClassRef: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlApp.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm"></a>

```typescript
public readonly digestAlgorithm: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `honorForceAuthn`<sup>Required</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn"></a>

```typescript
public readonly honorForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpIssuer`<sup>Required</sup> <a name="idpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer"></a>

```typescript
public readonly idpIssuer: string;
```

- *Type:* string

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyYearsValid`<sup>Required</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid"></a>

```typescript
public readonly keyYearsValid: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

---

##### `requestCompressed`<sup>Required</sup> <a name="requestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed"></a>

```typescript
public readonly requestCompressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseSigned`<sup>Required</sup> <a name="responseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned"></a>

```typescript
public readonly responseSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlSignedRequestEnabled`<sup>Required</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled"></a>

```typescript
public readonly samlSignedRequestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlVersion`<sup>Required</sup> <a name="samlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion"></a>

```typescript
public readonly samlVersion: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `singleLogoutCertificate`<sup>Required</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate"></a>

```typescript
public readonly singleLogoutCertificate: string;
```

- *Type:* string

---

##### `singleLogoutIssuer`<sup>Required</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer"></a>

```typescript
public readonly singleLogoutIssuer: string;
```

- *Type:* string

---

##### `singleLogoutUrl`<sup>Required</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl"></a>

```typescript
public readonly singleLogoutUrl: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spIssuer`<sup>Required</sup> <a name="spIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer"></a>

```typescript
public readonly spIssuer: string;
```

- *Type:* string

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectNameIdFormat`<sup>Required</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat"></a>

```typescript
public readonly subjectNameIdFormat: string;
```

- *Type:* string

---

##### `subjectNameIdTemplate`<sup>Required</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate"></a>

```typescript
public readonly subjectNameIdTemplate: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAppAttributeStatements <a name="SamlAppAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

const samlAppAttributeStatements: samlApp.SamlAppAttributeStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name">name</a></code> | <code>string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType">filterType</a></code> | <code>string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue">filterValue</a></code> | <code>string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace">namespace</a></code> | <code>string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type">type</a></code> | <code>string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#values SamlApp#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#name SamlApp#name}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#filter_type SamlApp#filter_type}

---

##### `filterValue`<sup>Optional</sup> <a name="filterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue"></a>

```typescript
public readonly filterValue: string;
```

- *Type:* string

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#filter_value SamlApp#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#namespace SamlApp#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#type SamlApp#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#values SamlApp#values}.

---

### SamlAppConfig <a name="SamlAppConfig" id="@cdktf/provider-okta.samlApp.SamlAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

const samlAppConfig: samlApp.SamlAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints">acsEndpoints</a></code> | <code>string[]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned">assertionSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements">attributeStatements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience">audience</a></code> | <code>string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef">authnContextClassRef</a></code> | <code>string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination">destination</a></code> | <code>string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm">digestAlgorithm</a></code> | <code>string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn">honorForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer">idpIssuer</a></code> | <code>string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName">keyName</a></code> | <code>string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid">keyYearsValid</a></code> | <code>number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient">recipient</a></code> | <code>string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed">requestCompressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned">responseSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion">samlVersion</a></code> | <code>string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer">spIssuer</a></code> | <code>string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#label SamlApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints"></a>

```typescript
public readonly acsEndpoints: string[];
```

- *Type:* string[]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#admin_note SamlApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#app_links_json SamlApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned"></a>

```typescript
public readonly assertionSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements"></a>

```typescript
public readonly attributeStatements: IResolvable | SamlAppAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#audience SamlApp#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef"></a>

```typescript
public readonly authnContextClassRef: string;
```

- *Type:* string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#destination SamlApp#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm"></a>

```typescript
public readonly digestAlgorithm: string;
```

- *Type:* string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#enduser_note SamlApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#groups SamlApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#hide_ios SamlApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#hide_web SamlApp#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn"></a>

```typescript
public readonly honorForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer"></a>

```typescript
public readonly idpIssuer: string;
```

- *Type:* string

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#key_name SamlApp#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid"></a>

```typescript
public readonly keyYearsValid: number;
```

- *Type:* number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#logo SamlApp#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#recipient SamlApp#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed"></a>

```typescript
public readonly requestCompressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#request_compressed SamlApp#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned"></a>

```typescript
public readonly responseSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#response_signed SamlApp#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled"></a>

```typescript
public readonly samlSignedRequestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#saml_signed_request_enabled SamlApp#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion"></a>

```typescript
public readonly samlVersion: string;
```

- *Type:* string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#saml_version SamlApp#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate"></a>

```typescript
public readonly singleLogoutCertificate: string;
```

- *Type:* string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer"></a>

```typescript
public readonly singleLogoutIssuer: string;
```

- *Type:* string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl"></a>

```typescript
public readonly singleLogoutUrl: string;
```

- *Type:* string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#skip_groups SamlApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#skip_users SamlApp#skip_users}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer"></a>

```typescript
public readonly spIssuer: string;
```

- *Type:* string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#sso_url SamlApp#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#status SamlApp#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat"></a>

```typescript
public readonly subjectNameIdFormat: string;
```

- *Type:* string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate"></a>

```typescript
public readonly subjectNameIdTemplate: string;
```

- *Type:* string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SamlAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#timeouts SamlApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template SamlApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | SamlAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#users SamlApp#users}

---

### SamlAppKeys <a name="SamlAppKeys" id="@cdktf/provider-okta.samlApp.SamlAppKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppKeys.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

const samlAppKeys: samlApp.SamlAppKeys = { ... }
```


### SamlAppTimeouts <a name="SamlAppTimeouts" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

const samlAppTimeouts: samlApp.SamlAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#create SamlApp#create}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#read SamlApp#read}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#update SamlApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#create SamlApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#read SamlApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#update SamlApp#update}.

---

### SamlAppUsers <a name="SamlAppUsers" id="@cdktf/provider-okta.samlApp.SamlAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppUsers.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

const samlAppUsers: samlApp.SamlAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#password SamlApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#username SamlApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAppAttributeStatementsList <a name="SamlAppAttributeStatementsList" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppAttributeStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get"></a>

```typescript
public get(index: number): SamlAppAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SamlAppAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>[]

---


### SamlAppAttributeStatementsOutputReference <a name="SamlAppAttributeStatementsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppAttributeStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue">resetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetFilterValue` <a name="resetFilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue"></a>

```typescript
public resetFilterValue(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput">filterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue">filterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `filterValueInput`<sup>Optional</sup> <a name="filterValueInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput"></a>

```typescript
public readonly filterValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `filterValue`<sup>Required</sup> <a name="filterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue"></a>

```typescript
public readonly filterValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SamlAppAttributeStatements | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a> | cdktf.IResolvable

---


### SamlAppKeysList <a name="SamlAppKeysList" id="@cdktf/provider-okta.samlApp.SamlAppKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get"></a>

```typescript
public get(index: number): SamlAppKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SamlAppKeysOutputReference <a name="SamlAppKeysOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use">use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C">x5C</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256">x5TS256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

---

##### `x5C`<sup>Required</sup> <a name="x5C" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C"></a>

```typescript
public readonly x5C: string[];
```

- *Type:* string[]

---

##### `x5TS256`<sup>Required</sup> <a name="x5TS256" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256"></a>

```typescript
public readonly x5TS256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SamlAppKeys;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a>

---


### SamlAppTimeoutsOutputReference <a name="SamlAppTimeoutsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SamlAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> | cdktf.IResolvable

---


### SamlAppUsersList <a name="SamlAppUsersList" id="@cdktf/provider-okta.samlApp.SamlAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get"></a>

```typescript
public get(index: number): SamlAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SamlAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>[]

---


### SamlAppUsersOutputReference <a name="SamlAppUsersOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer"></a>

```typescript
import { samlApp } from '@cdktf/provider-okta'

new samlApp.SamlAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SamlAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a> | cdktf.IResolvable

---



