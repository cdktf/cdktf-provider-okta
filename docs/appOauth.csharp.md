# `appOauth` Submodule <a name="`appOauth` Submodule" id="@cdktf/provider-okta.appOauth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauth <a name="AppOauth" id="@cdktf/provider-okta.appOauth.AppOauth"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_oauth okta_app_oauth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauth(Construct Scope, string Id, AppOauthConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim">PutGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putJwks">PutJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation">ResetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret">ResetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod">ResetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetCustomClientId">ResetCustomClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwks">ResetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode">ResetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes">ResetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri">ResetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret">ResetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway">ResetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes">ResetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod">ResetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUsers">ResetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect">ResetWildcardRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauth.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appOauth.AppOauth.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGroupsClaim` <a name="PutGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim"></a>

```csharp
private void PutGroupsClaim(AppOauthGroupsClaim Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `PutJwks` <a name="PutJwks" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks"></a>

```csharp
private void PutJwks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts"></a>

```csharp
private void PutTimeouts(AppOauthTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.appOauth.AppOauth.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauth.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson"></a>

```csharp
private void ResetAppSettingsJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAutoKeyRotation` <a name="ResetAutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation"></a>

```csharp
private void ResetAutoKeyRotation()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetClientBasicSecret` <a name="ResetClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret"></a>

```csharp
private void ResetClientBasicSecret()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientUri"></a>

```csharp
private void ResetClientUri()
```

##### `ResetConsentMethod` <a name="ResetConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod"></a>

```csharp
private void ResetConsentMethod()
```

##### `ResetCustomClientId` <a name="ResetCustomClientId" id="@cdktf/provider-okta.appOauth.AppOauth.resetCustomClientId"></a>

```csharp
private void ResetCustomClientId()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes"></a>

```csharp
private void ResetGrantTypes()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.appOauth.AppOauth.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appOauth.AppOauth.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment"></a>

```csharp
private void ResetImplicitAssignment()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwks"></a>

```csharp
private void ResetJwks()
```

##### `ResetLoginMode` <a name="ResetLoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode"></a>

```csharp
private void ResetLoginMode()
```

##### `ResetLoginScopes` <a name="ResetLoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes"></a>

```csharp
private void ResetLoginScopes()
```

##### `ResetLoginUri` <a name="ResetLoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri"></a>

```csharp
private void ResetLoginUri()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri"></a>

```csharp
private void ResetLogoUri()
```

##### `ResetOmitSecret` <a name="ResetOmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret"></a>

```csharp
private void ResetOmitSecret()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired"></a>

```csharp
private void ResetPkceRequired()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri"></a>

```csharp
private void ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris"></a>

```csharp
private void ResetPostLogoutRedirectUris()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-okta.appOauth.AppOauth.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```

##### `ResetRefreshTokenLeeway` <a name="ResetRefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway"></a>

```csharp
private void ResetRefreshTokenLeeway()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation"></a>

```csharp
private void ResetRefreshTokenRotation()
```

##### `ResetResponseTypes` <a name="ResetResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes"></a>

```csharp
private void ResetResponseTypes()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.appOauth.AppOauth.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.appOauth.AppOauth.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTokenEndpointAuthMethod` <a name="ResetTokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod"></a>

```csharp
private void ResetTokenEndpointAuthMethod()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetTosUri"></a>

```csharp
private void ResetTosUri()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.appOauth.AppOauth.resetUsers"></a>

```csharp
private void ResetUsers()
```

##### `ResetWildcardRedirect` <a name="ResetWildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect"></a>

```csharp
private void ResetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauth.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauth.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppOauth.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwks">Jwks</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList">AppOauthUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput">AutoKeyRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput">ClientBasicSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput">ClientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput">ConsentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.customClientIdInput">CustomClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput">GrantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput">GroupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput">JwksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput">LoginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput">LoginScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput">LoginUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput">LogoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput">OmitSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput">PolicyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput">RefreshTokenLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput">ResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput">TosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput">WildcardRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUri">ClientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod">ConsentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.customClientId">CustomClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginMode">LoginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUri">LoginUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUri">LogoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret">OmitSecret</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUri">PolicyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUri">TosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect">WildcardRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appOauth.AppOauth.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauth.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauth.AppOauth.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauth.AppOauth.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauth.AppOauth.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauth.AppOauth.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauth.AppOauth.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim"></a>

```csharp
public AppOauthGroupsClaimOutputReference GroupsClaim { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a>

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwks"></a>

```csharp
public AppOauthJwksList Jwks { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauth.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeouts"></a>

```csharp
public AppOauthTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.appOauth.AppOauth.property.users"></a>

```csharp
public AppOauthUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList">AppOauthUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput"></a>

```csharp
public string AppSettingsJsonInput { get; }
```

- *Type:* string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AutoKeyRotationInput`<sup>Optional</sup> <a name="AutoKeyRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput"></a>

```csharp
public object AutoKeyRotationInput { get; }
```

- *Type:* object

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `ClientBasicSecretInput`<sup>Optional</sup> <a name="ClientBasicSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput"></a>

```csharp
public string ClientBasicSecretInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput"></a>

```csharp
public string ClientUriInput { get; }
```

- *Type:* string

---

##### `ConsentMethodInput`<sup>Optional</sup> <a name="ConsentMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput"></a>

```csharp
public string ConsentMethodInput { get; }
```

- *Type:* string

---

##### `CustomClientIdInput`<sup>Optional</sup> <a name="CustomClientIdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.customClientIdInput"></a>

```csharp
public string CustomClientIdInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput"></a>

```csharp
public string[] GrantTypesInput { get; }
```

- *Type:* string[]

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput"></a>

```csharp
public AppOauthGroupsClaim GroupsClaimInput { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput"></a>

```csharp
public object ImplicitAssignmentInput { get; }
```

- *Type:* object

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput"></a>

```csharp
public object JwksInput { get; }
```

- *Type:* object

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput"></a>

```csharp
public string LoginModeInput { get; }
```

- *Type:* string

---

##### `LoginScopesInput`<sup>Optional</sup> <a name="LoginScopesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput"></a>

```csharp
public string[] LoginScopesInput { get; }
```

- *Type:* string[]

---

##### `LoginUriInput`<sup>Optional</sup> <a name="LoginUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput"></a>

```csharp
public string LoginUriInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput"></a>

```csharp
public string LogoUriInput { get; }
```

- *Type:* string

---

##### `OmitSecretInput`<sup>Optional</sup> <a name="OmitSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput"></a>

```csharp
public object OmitSecretInput { get; }
```

- *Type:* object

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput"></a>

```csharp
public object PkceRequiredInput { get; }
```

- *Type:* object

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput"></a>

```csharp
public string PolicyUriInput { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput"></a>

```csharp
public string[] PostLogoutRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenLeewayInput`<sup>Optional</sup> <a name="RefreshTokenLeewayInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput"></a>

```csharp
public double RefreshTokenLeewayInput { get; }
```

- *Type:* double

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput"></a>

```csharp
public string RefreshTokenRotationInput { get; }
```

- *Type:* string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput"></a>

```csharp
public string[] ResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput"></a>

```csharp
public string TokenEndpointAuthMethodInput { get; }
```

- *Type:* string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput"></a>

```csharp
public string TosUriInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `WildcardRedirectInput`<sup>Optional</sup> <a name="WildcardRedirectInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput"></a>

```csharp
public string WildcardRedirectInput { get; }
```

- *Type:* string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; }
```

- *Type:* string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `AutoKeyRotation`<sup>Required</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation"></a>

```csharp
public object AutoKeyRotation { get; }
```

- *Type:* object

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `ClientBasicSecret`<sup>Required</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret"></a>

```csharp
public string ClientBasicSecret { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUri"></a>

```csharp
public string ClientUri { get; }
```

- *Type:* string

---

##### `ConsentMethod`<sup>Required</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod"></a>

```csharp
public string ConsentMethod { get; }
```

- *Type:* string

---

##### `CustomClientId`<sup>Required</sup> <a name="CustomClientId" id="@cdktf/provider-okta.appOauth.AppOauth.property.customClientId"></a>

```csharp
public string CustomClientId { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.appOauth.AppOauth.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauth.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; }
```

- *Type:* object

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appOauth.AppOauth.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginMode"></a>

```csharp
public string LoginMode { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `LoginUri`<sup>Required</sup> <a name="LoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUri"></a>

```csharp
public string LoginUri { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appOauth.AppOauth.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUri"></a>

```csharp
public string LogoUri { get; }
```

- *Type:* string

---

##### `OmitSecret`<sup>Required</sup> <a name="OmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret"></a>

```csharp
public object OmitSecret { get; }
```

- *Type:* object

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; }
```

- *Type:* object

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUri"></a>

```csharp
public string PolicyUri { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; }
```

- *Type:* string[]

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-okta.appOauth.AppOauth.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `RefreshTokenLeeway`<sup>Required</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway"></a>

```csharp
public double RefreshTokenLeeway { get; }
```

- *Type:* double

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation"></a>

```csharp
public string RefreshTokenRotation { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.appOauth.AppOauth.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.appOauth.AppOauth.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appOauth.AppOauth.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; }
```

- *Type:* string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUri"></a>

```csharp
public string TosUri { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauth.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

##### `WildcardRedirect`<sup>Required</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect"></a>

```csharp
public string WildcardRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthConfig <a name="AppOauthConfig" id="@cdktf/provider-okta.appOauth.AppOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string Type,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string AdminNote = null,
    string AppLinksJson = null,
    string AppSettingsJson = null,
    string AuthenticationPolicy = null,
    object AutoKeyRotation = null,
    object AutoSubmitToolbar = null,
    string ClientBasicSecret = null,
    string ClientId = null,
    string ClientUri = null,
    string ConsentMethod = null,
    string CustomClientId = null,
    string EnduserNote = null,
    string[] GrantTypes = null,
    string[] Groups = null,
    AppOauthGroupsClaim GroupsClaim = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    object ImplicitAssignment = null,
    string IssuerMode = null,
    object Jwks = null,
    string LoginMode = null,
    string[] LoginScopes = null,
    string LoginUri = null,
    string Logo = null,
    string LogoUri = null,
    object OmitSecret = null,
    object PkceRequired = null,
    string PolicyUri = null,
    string[] PostLogoutRedirectUris = null,
    string Profile = null,
    string[] RedirectUris = null,
    double RefreshTokenLeeway = null,
    string RefreshTokenRotation = null,
    string[] ResponseTypes = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string Status = null,
    AppOauthTimeouts Timeouts = null,
    string TokenEndpointAuthMethod = null,
    string TosUri = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null,
    object Users = null,
    string WildcardRedirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.type">Type</a></code> | <code>string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>object</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri">ClientUri</a></code> | <code>string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod">ConsentMethod</a></code> | <code>string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.customClientId">CustomClientId</a></code> | <code>string</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#id AppOauth#id}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks">Jwks</a></code> | <code>object</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode">LoginMode</a></code> | <code>string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri">LoginUri</a></code> | <code>string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri">LogoUri</a></code> | <code>string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret">OmitSecret</a></code> | <code>object</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri">PolicyUri</a></code> | <code>string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile">Profile</a></code> | <code>string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>double</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>string</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri">TosUri</a></code> | <code>string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.users">Users</a></code> | <code>object</code> | users block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect">WildcardRedirect</a></code> | <code>string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#label AppOauth#label}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of client application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#type AppOauth#type}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#admin_note AppOauth#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#app_links_json AppOauth#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; set; }
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#app_settings_json AppOauth#app_settings_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#authentication_policy AppOauth#authentication_policy}

---

##### `AutoKeyRotation`<sup>Optional</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation"></a>

```csharp
public object AutoKeyRotation { get; set; }
```

- *Type:* object

Requested key rotation mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}

---

##### `ClientBasicSecret`<sup>Optional</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret"></a>

```csharp
public string ClientBasicSecret { get; set; }
```

- *Type:* string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#client_basic_secret AppOauth#client_basic_secret}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#client_id AppOauth#client_id}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri"></a>

```csharp
public string ClientUri { get; set; }
```

- *Type:* string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#client_uri AppOauth#client_uri}

---

##### `ConsentMethod`<sup>Optional</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod"></a>

```csharp
public string ConsentMethod { get; set; }
```

- *Type:* string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#consent_method AppOauth#consent_method}

---

##### `CustomClientId`<sup>Optional</sup> <a name="CustomClientId" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.customClientId"></a>

```csharp
public string CustomClientId { get; set; }
```

- *Type:* string

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#custom_client_id AppOauth#custom_client_id}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#enduser_note AppOauth#enduser_note}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; set; }
```

- *Type:* string[]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#grant_types AppOauth#grant_types}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#groups AppOauth#groups}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim"></a>

```csharp
public AppOauthGroupsClaim GroupsClaim { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#groups_claim AppOauth#groups_claim}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#hide_ios AppOauth#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#hide_web AppOauth#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#id AppOauth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; set; }
```

- *Type:* object

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#implicit_assignment AppOauth#implicit_assignment}

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#issuer_mode AppOauth#issuer_mode}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks"></a>

```csharp
public object Jwks { get; set; }
```

- *Type:* object

jwks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#jwks AppOauth#jwks}

---

##### `LoginMode`<sup>Optional</sup> <a name="LoginMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode"></a>

```csharp
public string LoginMode { get; set; }
```

- *Type:* string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#login_mode AppOauth#login_mode}

---

##### `LoginScopes`<sup>Optional</sup> <a name="LoginScopes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; set; }
```

- *Type:* string[]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#login_scopes AppOauth#login_scopes}

---

##### `LoginUri`<sup>Optional</sup> <a name="LoginUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri"></a>

```csharp
public string LoginUri { get; set; }
```

- *Type:* string

URI that initiates login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#login_uri AppOauth#login_uri}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#logo AppOauth#logo}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri"></a>

```csharp
public string LogoUri { get; set; }
```

- *Type:* string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#logo_uri AppOauth#logo_uri}

---

##### `OmitSecret`<sup>Optional</sup> <a name="OmitSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret"></a>

```csharp
public object OmitSecret { get; set; }
```

- *Type:* object

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#omit_secret AppOauth#omit_secret}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; set; }
```

- *Type:* object

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#pkce_required AppOauth#pkce_required}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri"></a>

```csharp
public string PolicyUri { get; set; }
```

- *Type:* string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#policy_uri AppOauth#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; set; }
```

- *Type:* string[]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#profile AppOauth#profile}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#redirect_uris AppOauth#redirect_uris}

---

##### `RefreshTokenLeeway`<sup>Optional</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway"></a>

```csharp
public double RefreshTokenLeeway { get; set; }
```

- *Type:* double

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation"></a>

```csharp
public string RefreshTokenRotation { get; set; }
```

- *Type:* string

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}

---

##### `ResponseTypes`<sup>Optional</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; set; }
```

- *Type:* string[]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#response_types AppOauth#response_types}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#skip_groups AppOauth#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#skip_users AppOauth#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#status AppOauth#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts"></a>

```csharp
public AppOauthTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#timeouts AppOauth#timeouts}

---

##### `TokenEndpointAuthMethod`<sup>Optional</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; set; }
```

- *Type:* string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri"></a>

```csharp
public string TosUri { get; set; }
```

- *Type:* string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#tos_uri AppOauth#tos_uri}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#user_name_template AppOauth#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#user_name_template_type AppOauth#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#users AppOauth#users}

---

##### `WildcardRedirect`<sup>Optional</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect"></a>

```csharp
public string WildcardRedirect { get; set; }
```

- *Type:* string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}

---

### AppOauthGroupsClaim <a name="AppOauthGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthGroupsClaim {
    string Name,
    string Type,
    string Value,
    string FilterType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name">Name</a></code> | <code>string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type">Type</a></code> | <code>string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value">Value</a></code> | <code>string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType">FilterType</a></code> | <code>string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#name AppOauth#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Groups claim type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#type AppOauth#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#value AppOauth#value}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#filter_type AppOauth#filter_type}

---

### AppOauthJwks <a name="AppOauthJwks" id="@cdktf/provider-okta.appOauth.AppOauthJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthJwks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthJwks {
    string Kid,
    string Kty,
    string E = null,
    string N = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid">Kid</a></code> | <code>string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty">Kty</a></code> | <code>string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.e">E</a></code> | <code>string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.n">N</a></code> | <code>string</code> | RSA Modulus. |

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid"></a>

```csharp
public string Kid { get; set; }
```

- *Type:* string

Key ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#kid AppOauth#kid}

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty"></a>

```csharp
public string Kty { get; set; }
```

- *Type:* string

Key type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#kty AppOauth#kty}

---

##### `E`<sup>Optional</sup> <a name="E" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.e"></a>

```csharp
public string E { get; set; }
```

- *Type:* string

RSA Exponent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#e AppOauth#e}

---

##### `N`<sup>Optional</sup> <a name="N" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.n"></a>

```csharp
public string N { get; set; }
```

- *Type:* string

RSA Modulus.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#n AppOauth#n}

---

### AppOauthTimeouts <a name="AppOauthTimeouts" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#create AppOauth#create}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#read AppOauth#read}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#update AppOauth#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#create AppOauth#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#read AppOauth#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#update AppOauth#update}.

---

### AppOauthUsers <a name="AppOauthUsers" id="@cdktf/provider-okta.appOauth.AppOauthUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauthUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#id AppOauth#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.appOauth.AppOauthUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#password AppOauth#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.appOauth.AppOauthUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth#username AppOauth#username}

---

## Classes <a name="Classes" id="Classes"></a>

### AppOauthGroupsClaimOutputReference <a name="AppOauthGroupsClaimOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthGroupsClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue"></a>

```csharp
public AppOauthGroupsClaim InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---


### AppOauthJwksList <a name="AppOauthJwksList" id="@cdktf/provider-okta.appOauth.AppOauthJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthJwksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get"></a>

```csharp
private AppOauthJwksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppOauthJwksOutputReference <a name="AppOauthJwksOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthJwksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE">ResetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN">ResetN</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetE` <a name="ResetE" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE"></a>

```csharp
private void ResetE()
```

##### `ResetN` <a name="ResetN" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN"></a>

```csharp
private void ResetN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput">EInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput">KidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput">KtyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput">NInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EInput`<sup>Optional</sup> <a name="EInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput"></a>

```csharp
public string EInput { get; }
```

- *Type:* string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput"></a>

```csharp
public string KidInput { get; }
```

- *Type:* string

---

##### `KtyInput`<sup>Optional</sup> <a name="KtyInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput"></a>

```csharp
public string KtyInput { get; }
```

- *Type:* string

---

##### `NInput`<sup>Optional</sup> <a name="NInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput"></a>

```csharp
public string NInput { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppOauthTimeoutsOutputReference <a name="AppOauthTimeoutsOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppOauthUsersList <a name="AppOauthUsersList" id="@cdktf/provider-okta.appOauth.AppOauthUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.get"></a>

```csharp
private AppOauthUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppOauthUsersOutputReference <a name="AppOauthUsersOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppOauthUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



