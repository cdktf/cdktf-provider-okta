# `okta_app_oauth`

Refer to the Terraform Registory for docs: [`okta_app_oauth`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth).

# `appOauth` Submodule <a name="`appOauth` Submodule" id="@cdktf/provider-okta.appOauth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauth <a name="AppOauth" id="@cdktf/provider-okta.appOauth.AppOauth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth okta_app_oauth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

new appOauth.AppOauth(scope: Construct, id: string, config: AppOauthConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim">putGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putJwks">putJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation">resetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret">resetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod">resetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwks">resetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode">resetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes">resetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri">resetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret">resetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired">resetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway">resetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation">resetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes">resetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod">resetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect">resetWildcardRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appOauth.AppOauth.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGroupsClaim` <a name="putGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim"></a>

```typescript
public putGroupsClaim(value: AppOauthGroupsClaim): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `putJwks` <a name="putJwks" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks"></a>

```typescript
public putJwks(value: IResolvable | AppOauthJwks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts"></a>

```typescript
public putTimeouts(value: AppOauthTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson"></a>

```typescript
public resetAppSettingsJson(): void
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy"></a>

```typescript
public resetAuthenticationPolicy(): void
```

##### `resetAutoKeyRotation` <a name="resetAutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation"></a>

```typescript
public resetAutoKeyRotation(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetClientBasicSecret` <a name="resetClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret"></a>

```typescript
public resetClientBasicSecret(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientUri"></a>

```typescript
public resetClientUri(): void
```

##### `resetConsentMethod` <a name="resetConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod"></a>

```typescript
public resetConsentMethod(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes"></a>

```typescript
public resetGrantTypes(): void
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appOauth.AppOauth.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment"></a>

```typescript
public resetImplicitAssignment(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwks"></a>

```typescript
public resetJwks(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetLoginMode` <a name="resetLoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode"></a>

```typescript
public resetLoginMode(): void
```

##### `resetLoginScopes` <a name="resetLoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes"></a>

```typescript
public resetLoginScopes(): void
```

##### `resetLoginUri` <a name="resetLoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri"></a>

```typescript
public resetLoginUri(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri"></a>

```typescript
public resetLogoUri(): void
```

##### `resetOmitSecret` <a name="resetOmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret"></a>

```typescript
public resetOmitSecret(): void
```

##### `resetPkceRequired` <a name="resetPkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired"></a>

```typescript
public resetPkceRequired(): void
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri"></a>

```typescript
public resetPolicyUri(): void
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris"></a>

```typescript
public resetPostLogoutRedirectUris(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.appOauth.AppOauth.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```

##### `resetRefreshTokenLeeway` <a name="resetRefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway"></a>

```typescript
public resetRefreshTokenLeeway(): void
```

##### `resetRefreshTokenRotation` <a name="resetRefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation"></a>

```typescript
public resetRefreshTokenRotation(): void
```

##### `resetResponseTypes` <a name="resetResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes"></a>

```typescript
public resetResponseTypes(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenEndpointAuthMethod` <a name="resetTokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod"></a>

```typescript
public resetTokenEndpointAuthMethod(): void
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetTosUri"></a>

```typescript
public resetTosUri(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetWildcardRedirect` <a name="resetWildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect"></a>

```typescript
public resetWildcardRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

appOauth.AppOauth.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

appOauth.AppOauth.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

appOauth.AppOauth.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwks">jwks</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput">autoKeyRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput">clientBasicSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput">clientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput">consentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput">groupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput">jwksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput">loginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput">loginScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput">loginUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput">logoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput">omitSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput">pkceRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput">policyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput">refreshTokenLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput">refreshTokenRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput">responseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput">tosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput">wildcardRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation">autoKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret">clientBasicSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUri">clientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod">consentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginMode">loginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUri">loginUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUri">logoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret">omitSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired">pkceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUri">policyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUri">tosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect">wildcardRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauth.AppOauth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauth.AppOauth.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauth.AppOauth.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauth.AppOauth.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauth.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauth.AppOauth.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: AppOauthGroupsClaimOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a>

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwks"></a>

```typescript
public readonly jwks: AppOauthJwksList;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeouts"></a>

```typescript
public readonly timeouts: AppOauthTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput"></a>

```typescript
public readonly appSettingsJsonInput: string;
```

- *Type:* string

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `autoKeyRotationInput`<sup>Optional</sup> <a name="autoKeyRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput"></a>

```typescript
public readonly autoKeyRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientBasicSecretInput`<sup>Optional</sup> <a name="clientBasicSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput"></a>

```typescript
public readonly clientBasicSecretInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput"></a>

```typescript
public readonly clientUriInput: string;
```

- *Type:* string

---

##### `consentMethodInput`<sup>Optional</sup> <a name="consentMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput"></a>

```typescript
public readonly consentMethodInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: AppOauthGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput"></a>

```typescript
public readonly implicitAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput"></a>

```typescript
public readonly jwksInput: IResolvable | AppOauthJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput"></a>

```typescript
public readonly loginModeInput: string;
```

- *Type:* string

---

##### `loginScopesInput`<sup>Optional</sup> <a name="loginScopesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput"></a>

```typescript
public readonly loginScopesInput: string[];
```

- *Type:* string[]

---

##### `loginUriInput`<sup>Optional</sup> <a name="loginUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput"></a>

```typescript
public readonly loginUriInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput"></a>

```typescript
public readonly logoUriInput: string;
```

- *Type:* string

---

##### `omitSecretInput`<sup>Optional</sup> <a name="omitSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput"></a>

```typescript
public readonly omitSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pkceRequiredInput`<sup>Optional</sup> <a name="pkceRequiredInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput"></a>

```typescript
public readonly pkceRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput"></a>

```typescript
public readonly policyUriInput: string;
```

- *Type:* string

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput"></a>

```typescript
public readonly postLogoutRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenLeewayInput`<sup>Optional</sup> <a name="refreshTokenLeewayInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput"></a>

```typescript
public readonly refreshTokenLeewayInput: number;
```

- *Type:* number

---

##### `refreshTokenRotationInput`<sup>Optional</sup> <a name="refreshTokenRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput"></a>

```typescript
public readonly refreshTokenRotationInput: string;
```

- *Type:* string

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput"></a>

```typescript
public readonly responseTypesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppOauthTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput"></a>

```typescript
public readonly tokenEndpointAuthMethodInput: string;
```

- *Type:* string

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput"></a>

```typescript
public readonly tosUriInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `wildcardRedirectInput`<sup>Optional</sup> <a name="wildcardRedirectInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput"></a>

```typescript
public readonly wildcardRedirectInput: string;
```

- *Type:* string

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `autoKeyRotation`<sup>Required</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation"></a>

```typescript
public readonly autoKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientBasicSecret`<sup>Required</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret"></a>

```typescript
public readonly clientBasicSecret: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

---

##### `consentMethod`<sup>Required</sup> <a name="consentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod"></a>

```typescript
public readonly consentMethod: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appOauth.AppOauth.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `loginUri`<sup>Required</sup> <a name="loginUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUri"></a>

```typescript
public readonly loginUri: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appOauth.AppOauth.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

---

##### `omitSecret`<sup>Required</sup> <a name="omitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret"></a>

```typescript
public readonly omitSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pkceRequired`<sup>Required</sup> <a name="pkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired"></a>

```typescript
public readonly pkceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.appOauth.AppOauth.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `refreshTokenLeeway`<sup>Required</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway"></a>

```typescript
public readonly refreshTokenLeeway: number;
```

- *Type:* number

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: string;
```

- *Type:* string

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appOauth.AppOauth.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

##### `wildcardRedirect`<sup>Required</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect"></a>

```typescript
public readonly wildcardRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthConfig <a name="AppOauthConfig" id="@cdktf/provider-okta.appOauth.AppOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthConfig.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

const appOauthConfig: appOauth.AppOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.type">type</a></code> | <code>string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation">autoKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret">clientBasicSecret</a></code> | <code>string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri">clientUri</a></code> | <code>string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod">consentMethod</a></code> | <code>string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#id AppOauth#id}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks">jwks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri">jwksUri</a></code> | <code>string</code> | URL reference to JWKS. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode">loginMode</a></code> | <code>string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri">loginUri</a></code> | <code>string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri">logoUri</a></code> | <code>string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret">omitSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired">pkceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri">policyUri</a></code> | <code>string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile">profile</a></code> | <code>string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>string</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri">tosUri</a></code> | <code>string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect">wildcardRedirect</a></code> | <code>string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#label AppOauth#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#type AppOauth#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#admin_note AppOauth#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#app_links_json AppOauth#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#app_settings_json AppOauth#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#authentication_policy AppOauth#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation"></a>

```typescript
public readonly autoKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret"></a>

```typescript
public readonly clientBasicSecret: string;
```

- *Type:* string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#client_basic_secret AppOauth#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#client_id AppOauth#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#client_uri AppOauth#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod"></a>

```typescript
public readonly consentMethod: string;
```

- *Type:* string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#consent_method AppOauth#consent_method}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#enduser_note AppOauth#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#grant_types AppOauth#grant_types}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: AppOauthGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#groups_claim AppOauth#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#hide_ios AppOauth#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#hide_web AppOauth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#id AppOauth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#implicit_assignment AppOauth#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#issuer_mode AppOauth#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks"></a>

```typescript
public readonly jwks: IResolvable | AppOauthJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#jwks AppOauth#jwks}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

URL reference to JWKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#jwks_uri AppOauth#jwks_uri}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#login_mode AppOauth#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#login_scopes AppOauth#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri"></a>

```typescript
public readonly loginUri: string;
```

- *Type:* string

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#login_uri AppOauth#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#logo AppOauth#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#logo_uri AppOauth#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret"></a>

```typescript
public readonly omitSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#omit_secret AppOauth#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired"></a>

```typescript
public readonly pkceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#pkce_required AppOauth#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#policy_uri AppOauth#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#profile AppOauth#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#redirect_uris AppOauth#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway"></a>

```typescript
public readonly refreshTokenLeeway: number;
```

- *Type:* number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: string;
```

- *Type:* string

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#response_types AppOauth#response_types}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#status AppOauth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppOauthTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#timeouts AppOauth#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#tos_uri AppOauth#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#user_name_template AppOauth#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#user_name_template_type AppOauth#user_name_template_type}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect"></a>

```typescript
public readonly wildcardRedirect: string;
```

- *Type:* string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}

---

### AppOauthGroupsClaim <a name="AppOauthGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

const appOauthGroupsClaim: appOauth.AppOauthGroupsClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name">name</a></code> | <code>string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type">type</a></code> | <code>string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value">value</a></code> | <code>string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType">filterType</a></code> | <code>string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#name AppOauth#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#type AppOauth#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#value AppOauth#value}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#filter_type AppOauth#filter_type}

---

### AppOauthJwks <a name="AppOauthJwks" id="@cdktf/provider-okta.appOauth.AppOauthJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthJwks.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

const appOauthJwks: appOauth.AppOauthJwks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid">kid</a></code> | <code>string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty">kty</a></code> | <code>string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.e">e</a></code> | <code>string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.n">n</a></code> | <code>string</code> | RSA Modulus. |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#kid AppOauth#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#kty AppOauth#kty}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#e AppOauth#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#n AppOauth#n}

---

### AppOauthTimeouts <a name="AppOauthTimeouts" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

const appOauthTimeouts: appOauth.AppOauthTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#create AppOauth#create}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#read AppOauth#read}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#update AppOauth#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#create AppOauth#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#read AppOauth#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/app_oauth#update AppOauth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppOauthGroupsClaimOutputReference <a name="AppOauthGroupsClaimOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

new appOauth.AppOauthGroupsClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppOauthGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---


### AppOauthJwksList <a name="AppOauthJwksList" id="@cdktf/provider-okta.appOauth.AppOauthJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

new appOauth.AppOauthJwksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get"></a>

```typescript
public get(index: number): AppOauthJwksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppOauthJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>[]

---


### AppOauthJwksOutputReference <a name="AppOauthJwksOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

new appOauth.AppOauthJwksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE">resetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN">resetN</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetE` <a name="resetE" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE"></a>

```typescript
public resetE(): void
```

##### `resetN` <a name="resetN" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN"></a>

```typescript
public resetN(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput">eInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput">kidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput">ktyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput">nInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eInput`<sup>Optional</sup> <a name="eInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput"></a>

```typescript
public readonly eInput: string;
```

- *Type:* string

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput"></a>

```typescript
public readonly kidInput: string;
```

- *Type:* string

---

##### `ktyInput`<sup>Optional</sup> <a name="ktyInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput"></a>

```typescript
public readonly ktyInput: string;
```

- *Type:* string

---

##### `nInput`<sup>Optional</sup> <a name="nInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput"></a>

```typescript
public readonly nInput: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppOauthJwks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>

---


### AppOauthTimeoutsOutputReference <a name="AppOauthTimeoutsOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer"></a>

```typescript
import { appOauth } from '@cdktf/provider-okta'

new appOauth.AppOauthTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppOauthTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---



