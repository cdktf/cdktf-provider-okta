# `okta_oauth_app`

Refer to the Terraform Registory for docs: [`okta_oauth_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app).

# `oauthApp` Submodule <a name="`oauthApp` Submodule" id="@cdktf/provider-okta.oauthApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthApp <a name="OauthApp" id="@cdktf/provider-okta.oauthApp.OauthApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app okta_oauth_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthApp(scope: Construct, id: string, config: OauthAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim">putGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putJwks">putJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation">resetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret">resetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod">resetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId">resetCustomClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetJwks">resetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode">resetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes">resetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri">resetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret">resetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired">resetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway">resetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation">resetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes">resetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod">resetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUsers">resetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect">resetWildcardRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.oauthApp.OauthApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGroupsClaim` <a name="putGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim"></a>

```typescript
public putGroupsClaim(value: OauthAppGroupsClaim): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `putJwks` <a name="putJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks"></a>

```typescript
public putJwks(value: IResolvable | OauthAppJwks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts"></a>

```typescript
public putTimeouts(value: OauthAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers"></a>

```typescript
public putUsers(value: IResolvable | OauthAppUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson"></a>

```typescript
public resetAppSettingsJson(): void
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy"></a>

```typescript
public resetAuthenticationPolicy(): void
```

##### `resetAutoKeyRotation` <a name="resetAutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation"></a>

```typescript
public resetAutoKeyRotation(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetClientBasicSecret` <a name="resetClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret"></a>

```typescript
public resetClientBasicSecret(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri"></a>

```typescript
public resetClientUri(): void
```

##### `resetConsentMethod` <a name="resetConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod"></a>

```typescript
public resetConsentMethod(): void
```

##### `resetCustomClientId` <a name="resetCustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId"></a>

```typescript
public resetCustomClientId(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes"></a>

```typescript
public resetGrantTypes(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment"></a>

```typescript
public resetImplicitAssignment(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.resetJwks"></a>

```typescript
public resetJwks(): void
```

##### `resetLoginMode` <a name="resetLoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode"></a>

```typescript
public resetLoginMode(): void
```

##### `resetLoginScopes` <a name="resetLoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes"></a>

```typescript
public resetLoginScopes(): void
```

##### `resetLoginUri` <a name="resetLoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri"></a>

```typescript
public resetLoginUri(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri"></a>

```typescript
public resetLogoUri(): void
```

##### `resetOmitSecret` <a name="resetOmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret"></a>

```typescript
public resetOmitSecret(): void
```

##### `resetPkceRequired` <a name="resetPkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired"></a>

```typescript
public resetPkceRequired(): void
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri"></a>

```typescript
public resetPolicyUri(): void
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris"></a>

```typescript
public resetPostLogoutRedirectUris(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.oauthApp.OauthApp.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```

##### `resetRefreshTokenLeeway` <a name="resetRefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway"></a>

```typescript
public resetRefreshTokenLeeway(): void
```

##### `resetRefreshTokenRotation` <a name="resetRefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation"></a>

```typescript
public resetRefreshTokenRotation(): void
```

##### `resetResponseTypes` <a name="resetResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes"></a>

```typescript
public resetResponseTypes(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenEndpointAuthMethod` <a name="resetTokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod"></a>

```typescript
public resetTokenEndpointAuthMethod(): void
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri"></a>

```typescript
public resetTosUri(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUsers"></a>

```typescript
public resetUsers(): void
```

##### `resetWildcardRedirect` <a name="resetWildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect"></a>

```typescript
public resetWildcardRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

oauthApp.OauthApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

oauthApp.OauthApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

oauthApp.OauthApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwks">jwks</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput">autoKeyRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput">clientBasicSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput">clientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput">consentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput">customClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput">groupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput">jwksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput">loginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput">loginScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput">loginUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput">logoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput">omitSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput">pkceRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput">policyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput">refreshTokenLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput">refreshTokenRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput">responseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput">tosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput">usersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput">wildcardRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation">autoKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret">clientBasicSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri">clientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod">consentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId">customClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode">loginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri">loginUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri">logoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret">omitSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired">pkceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri">policyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri">tosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect">wildcardRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.oauthApp.OauthApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.oauthApp.OauthApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: OauthAppGroupsClaimOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a>

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwks"></a>

```typescript
public readonly jwks: OauthAppJwksList;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts"></a>

```typescript
public readonly timeouts: OauthAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.users"></a>

```typescript
public readonly users: OauthAppUsersList;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput"></a>

```typescript
public readonly appSettingsJsonInput: string;
```

- *Type:* string

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `autoKeyRotationInput`<sup>Optional</sup> <a name="autoKeyRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput"></a>

```typescript
public readonly autoKeyRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientBasicSecretInput`<sup>Optional</sup> <a name="clientBasicSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput"></a>

```typescript
public readonly clientBasicSecretInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput"></a>

```typescript
public readonly clientUriInput: string;
```

- *Type:* string

---

##### `consentMethodInput`<sup>Optional</sup> <a name="consentMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput"></a>

```typescript
public readonly consentMethodInput: string;
```

- *Type:* string

---

##### `customClientIdInput`<sup>Optional</sup> <a name="customClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput"></a>

```typescript
public readonly customClientIdInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: OauthAppGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput"></a>

```typescript
public readonly implicitAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput"></a>

```typescript
public readonly jwksInput: IResolvable | OauthAppJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput"></a>

```typescript
public readonly loginModeInput: string;
```

- *Type:* string

---

##### `loginScopesInput`<sup>Optional</sup> <a name="loginScopesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput"></a>

```typescript
public readonly loginScopesInput: string[];
```

- *Type:* string[]

---

##### `loginUriInput`<sup>Optional</sup> <a name="loginUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput"></a>

```typescript
public readonly loginUriInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput"></a>

```typescript
public readonly logoUriInput: string;
```

- *Type:* string

---

##### `omitSecretInput`<sup>Optional</sup> <a name="omitSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput"></a>

```typescript
public readonly omitSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pkceRequiredInput`<sup>Optional</sup> <a name="pkceRequiredInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput"></a>

```typescript
public readonly pkceRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput"></a>

```typescript
public readonly policyUriInput: string;
```

- *Type:* string

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput"></a>

```typescript
public readonly postLogoutRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenLeewayInput`<sup>Optional</sup> <a name="refreshTokenLeewayInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput"></a>

```typescript
public readonly refreshTokenLeewayInput: number;
```

- *Type:* number

---

##### `refreshTokenRotationInput`<sup>Optional</sup> <a name="refreshTokenRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput"></a>

```typescript
public readonly refreshTokenRotationInput: string;
```

- *Type:* string

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput"></a>

```typescript
public readonly responseTypesInput: string[];
```

- *Type:* string[]

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: OauthAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> | cdktf.IResolvable

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput"></a>

```typescript
public readonly tokenEndpointAuthMethodInput: string;
```

- *Type:* string

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput"></a>

```typescript
public readonly tosUriInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | OauthAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]

---

##### `wildcardRedirectInput`<sup>Optional</sup> <a name="wildcardRedirectInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput"></a>

```typescript
public readonly wildcardRedirectInput: string;
```

- *Type:* string

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `autoKeyRotation`<sup>Required</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation"></a>

```typescript
public readonly autoKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientBasicSecret`<sup>Required</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret"></a>

```typescript
public readonly clientBasicSecret: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

---

##### `consentMethod`<sup>Required</sup> <a name="consentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod"></a>

```typescript
public readonly consentMethod: string;
```

- *Type:* string

---

##### `customClientId`<sup>Required</sup> <a name="customClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId"></a>

```typescript
public readonly customClientId: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthApp.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `loginUri`<sup>Required</sup> <a name="loginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri"></a>

```typescript
public readonly loginUri: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

---

##### `omitSecret`<sup>Required</sup> <a name="omitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret"></a>

```typescript
public readonly omitSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pkceRequired`<sup>Required</sup> <a name="pkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired"></a>

```typescript
public readonly pkceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `refreshTokenLeeway`<sup>Required</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway"></a>

```typescript
public readonly refreshTokenLeeway: number;
```

- *Type:* number

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: string;
```

- *Type:* string

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

##### `wildcardRedirect`<sup>Required</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect"></a>

```typescript
public readonly wildcardRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppConfig <a name="OauthAppConfig" id="@cdktf/provider-okta.oauthApp.OauthAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

const oauthAppConfig: oauthApp.OauthAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type">type</a></code> | <code>string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation">autoKeyRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret">clientBasicSecret</a></code> | <code>string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri">clientUri</a></code> | <code>string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod">consentMethod</a></code> | <code>string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId">customClientId</a></code> | <code>string</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups">groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks">jwks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode">loginMode</a></code> | <code>string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri">loginUri</a></code> | <code>string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri">logoUri</a></code> | <code>string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret">omitSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired">pkceRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri">policyUri</a></code> | <code>string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile">profile</a></code> | <code>string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>string</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri">tosUri</a></code> | <code>string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users">users</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]</code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect">wildcardRedirect</a></code> | <code>string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#label OauthApp#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#admin_note OauthApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation"></a>

```typescript
public readonly autoKeyRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret"></a>

```typescript
public readonly clientBasicSecret: string;
```

- *Type:* string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_id OauthApp#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_uri OauthApp#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod"></a>

```typescript
public readonly consentMethod: string;
```

- *Type:* string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#consent_method OauthApp#consent_method}

---

##### `customClientId`<sup>Optional</sup> <a name="customClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId"></a>

```typescript
public readonly customClientId: string;
```

- *Type:* string

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#grant_types OauthApp#grant_types}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups OauthApp#groups}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: OauthAppGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_web OauthApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks"></a>

```typescript
public readonly jwks: IResolvable | OauthAppJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#jwks OauthApp#jwks}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_mode OauthApp#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri"></a>

```typescript
public readonly loginUri: string;
```

- *Type:* string

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_uri OauthApp#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo OauthApp#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret"></a>

```typescript
public readonly omitSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired"></a>

```typescript
public readonly pkceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#profile OauthApp#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway"></a>

```typescript
public readonly refreshTokenLeeway: number;
```

- *Type:* number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: string;
```

- *Type:* string

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#response_types OauthApp#response_types}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_users OauthApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#status OauthApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OauthAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#timeouts OauthApp#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod"></a>

```typescript
public readonly tokenEndpointAuthMethod: string;
```

- *Type:* string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri"></a>

```typescript
public readonly tosUri: string;
```

- *Type:* string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users"></a>

```typescript
public readonly users: IResolvable | OauthAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#users OauthApp#users}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect"></a>

```typescript
public readonly wildcardRedirect: string;
```

- *Type:* string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

### OauthAppGroupsClaim <a name="OauthAppGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

const oauthAppGroupsClaim: oauthApp.OauthAppGroupsClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name">name</a></code> | <code>string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type">type</a></code> | <code>string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value">value</a></code> | <code>string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType">filterType</a></code> | <code>string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#name OauthApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#value OauthApp#value}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#filter_type OauthApp#filter_type}

---

### OauthAppJwks <a name="OauthAppJwks" id="@cdktf/provider-okta.oauthApp.OauthAppJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

const oauthAppJwks: oauthApp.OauthAppJwks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid">kid</a></code> | <code>string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty">kty</a></code> | <code>string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e">e</a></code> | <code>string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n">n</a></code> | <code>string</code> | RSA Modulus. |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kid OauthApp#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kty OauthApp#kty}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#e OauthApp#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#n OauthApp#n}

---

### OauthAppTimeouts <a name="OauthAppTimeouts" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

const oauthAppTimeouts: oauthApp.OauthAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}.

---

### OauthAppUsers <a name="OauthAppUsers" id="@cdktf/provider-okta.oauthApp.OauthAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

const oauthAppUsers: oauthApp.OauthAppUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id">id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password">password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username">username</a></code> | <code>string</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#password OauthApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#username OauthApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthAppGroupsClaimOutputReference <a name="OauthAppGroupsClaimOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppGroupsClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OauthAppGroupsClaim;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---


### OauthAppJwksList <a name="OauthAppJwksList" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppJwksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get"></a>

```typescript
public get(index: number): OauthAppJwksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OauthAppJwks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>[]

---


### OauthAppJwksOutputReference <a name="OauthAppJwksOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppJwksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE">resetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN">resetN</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetE` <a name="resetE" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE"></a>

```typescript
public resetE(): void
```

##### `resetN` <a name="resetN" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN"></a>

```typescript
public resetN(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput">eInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput">kidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput">ktyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput">nInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eInput`<sup>Optional</sup> <a name="eInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput"></a>

```typescript
public readonly eInput: string;
```

- *Type:* string

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput"></a>

```typescript
public readonly kidInput: string;
```

- *Type:* string

---

##### `ktyInput`<sup>Optional</sup> <a name="ktyInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput"></a>

```typescript
public readonly ktyInput: string;
```

- *Type:* string

---

##### `nInput`<sup>Optional</sup> <a name="nInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput"></a>

```typescript
public readonly nInput: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OauthAppJwks | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a> | cdktf.IResolvable

---


### OauthAppTimeoutsOutputReference <a name="OauthAppTimeoutsOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OauthAppTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> | cdktf.IResolvable

---


### OauthAppUsersList <a name="OauthAppUsersList" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get"></a>

```typescript
public get(index: number): OauthAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OauthAppUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>[]

---


### OauthAppUsersOutputReference <a name="OauthAppUsersOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer"></a>

```typescript
import { oauthApp } from '@cdktf/provider-okta'

new oauthApp.OauthAppUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OauthAppUsers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a> | cdktf.IResolvable

---



