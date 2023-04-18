# `okta_oauth_app`

Refer to the Terraform Registory for docs: [`okta_oauth_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app).

# `oauthApp` Submodule <a name="`oauthApp` Submodule" id="@cdktf/provider-okta.oauthApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthApp <a name="OauthApp" id="@cdktf/provider-okta.oauthApp.OauthApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app okta_oauth_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthApp(Construct Scope, string Id, OauthAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim">PutGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putJwks">PutJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation">ResetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret">ResetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod">ResetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId">ResetCustomClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetJwks">ResetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode">ResetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes">ResetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri">ResetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret">ResetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway">ResetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes">ResetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod">ResetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUsers">ResetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect">ResetWildcardRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.oauthApp.OauthApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGroupsClaim` <a name="PutGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim"></a>

```csharp
private void PutGroupsClaim(OauthAppGroupsClaim Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `PutJwks` <a name="PutJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks"></a>

```csharp
private void PutJwks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts"></a>

```csharp
private void PutTimeouts(OauthAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson"></a>

```csharp
private void ResetAppSettingsJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAutoKeyRotation` <a name="ResetAutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation"></a>

```csharp
private void ResetAutoKeyRotation()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetClientBasicSecret` <a name="ResetClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret"></a>

```csharp
private void ResetClientBasicSecret()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri"></a>

```csharp
private void ResetClientUri()
```

##### `ResetConsentMethod` <a name="ResetConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod"></a>

```csharp
private void ResetConsentMethod()
```

##### `ResetCustomClientId` <a name="ResetCustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId"></a>

```csharp
private void ResetCustomClientId()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes"></a>

```csharp
private void ResetGrantTypes()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment"></a>

```csharp
private void ResetImplicitAssignment()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.resetJwks"></a>

```csharp
private void ResetJwks()
```

##### `ResetLoginMode` <a name="ResetLoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode"></a>

```csharp
private void ResetLoginMode()
```

##### `ResetLoginScopes` <a name="ResetLoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes"></a>

```csharp
private void ResetLoginScopes()
```

##### `ResetLoginUri` <a name="ResetLoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri"></a>

```csharp
private void ResetLoginUri()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri"></a>

```csharp
private void ResetLogoUri()
```

##### `ResetOmitSecret` <a name="ResetOmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret"></a>

```csharp
private void ResetOmitSecret()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired"></a>

```csharp
private void ResetPkceRequired()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri"></a>

```csharp
private void ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris"></a>

```csharp
private void ResetPostLogoutRedirectUris()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-okta.oauthApp.OauthApp.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```

##### `ResetRefreshTokenLeeway` <a name="ResetRefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway"></a>

```csharp
private void ResetRefreshTokenLeeway()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation"></a>

```csharp
private void ResetRefreshTokenRotation()
```

##### `ResetResponseTypes` <a name="ResetResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes"></a>

```csharp
private void ResetResponseTypes()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTokenEndpointAuthMethod` <a name="ResetTokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod"></a>

```csharp
private void ResetTokenEndpointAuthMethod()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri"></a>

```csharp
private void ResetTosUri()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUsers"></a>

```csharp
private void ResetUsers()
```

##### `ResetWildcardRedirect` <a name="ResetWildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect"></a>

```csharp
private void ResetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OauthApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OauthApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OauthApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwks">Jwks</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput">AutoKeyRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput">ClientBasicSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput">ClientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput">ConsentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput">CustomClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput">GrantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput">GroupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput">JwksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput">LoginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput">LoginScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput">LoginUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput">LogoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput">OmitSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput">PolicyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput">RefreshTokenLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput">ResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput">TosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput">WildcardRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri">ClientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod">ConsentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId">CustomClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode">LoginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri">LoginUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri">LogoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret">OmitSecret</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri">PolicyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri">TosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect">WildcardRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.oauthApp.OauthApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthApp.OauthApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthApp.OauthApp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthApp.OauthApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim"></a>

```csharp
public OauthAppGroupsClaimOutputReference GroupsClaim { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a>

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwks"></a>

```csharp
public OauthAppJwksList Jwks { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts"></a>

```csharp
public OauthAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.users"></a>

```csharp
public OauthAppUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput"></a>

```csharp
public string AppSettingsJsonInput { get; }
```

- *Type:* string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AutoKeyRotationInput`<sup>Optional</sup> <a name="AutoKeyRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput"></a>

```csharp
public object AutoKeyRotationInput { get; }
```

- *Type:* object

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `ClientBasicSecretInput`<sup>Optional</sup> <a name="ClientBasicSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput"></a>

```csharp
public string ClientBasicSecretInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput"></a>

```csharp
public string ClientUriInput { get; }
```

- *Type:* string

---

##### `ConsentMethodInput`<sup>Optional</sup> <a name="ConsentMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput"></a>

```csharp
public string ConsentMethodInput { get; }
```

- *Type:* string

---

##### `CustomClientIdInput`<sup>Optional</sup> <a name="CustomClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput"></a>

```csharp
public string CustomClientIdInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput"></a>

```csharp
public string[] GrantTypesInput { get; }
```

- *Type:* string[]

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput"></a>

```csharp
public OauthAppGroupsClaim GroupsClaimInput { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput"></a>

```csharp
public object ImplicitAssignmentInput { get; }
```

- *Type:* object

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput"></a>

```csharp
public object JwksInput { get; }
```

- *Type:* object

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput"></a>

```csharp
public string LoginModeInput { get; }
```

- *Type:* string

---

##### `LoginScopesInput`<sup>Optional</sup> <a name="LoginScopesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput"></a>

```csharp
public string[] LoginScopesInput { get; }
```

- *Type:* string[]

---

##### `LoginUriInput`<sup>Optional</sup> <a name="LoginUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput"></a>

```csharp
public string LoginUriInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput"></a>

```csharp
public string LogoUriInput { get; }
```

- *Type:* string

---

##### `OmitSecretInput`<sup>Optional</sup> <a name="OmitSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput"></a>

```csharp
public object OmitSecretInput { get; }
```

- *Type:* object

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput"></a>

```csharp
public object PkceRequiredInput { get; }
```

- *Type:* object

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput"></a>

```csharp
public string PolicyUriInput { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput"></a>

```csharp
public string[] PostLogoutRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenLeewayInput`<sup>Optional</sup> <a name="RefreshTokenLeewayInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput"></a>

```csharp
public double RefreshTokenLeewayInput { get; }
```

- *Type:* double

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput"></a>

```csharp
public string RefreshTokenRotationInput { get; }
```

- *Type:* string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput"></a>

```csharp
public string[] ResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput"></a>

```csharp
public string TokenEndpointAuthMethodInput { get; }
```

- *Type:* string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput"></a>

```csharp
public string TosUriInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `WildcardRedirectInput`<sup>Optional</sup> <a name="WildcardRedirectInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput"></a>

```csharp
public string WildcardRedirectInput { get; }
```

- *Type:* string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; }
```

- *Type:* string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `AutoKeyRotation`<sup>Required</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation"></a>

```csharp
public object AutoKeyRotation { get; }
```

- *Type:* object

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `ClientBasicSecret`<sup>Required</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret"></a>

```csharp
public string ClientBasicSecret { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri"></a>

```csharp
public string ClientUri { get; }
```

- *Type:* string

---

##### `ConsentMethod`<sup>Required</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod"></a>

```csharp
public string ConsentMethod { get; }
```

- *Type:* string

---

##### `CustomClientId`<sup>Required</sup> <a name="CustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId"></a>

```csharp
public string CustomClientId { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; }
```

- *Type:* object

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.oauthApp.OauthApp.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode"></a>

```csharp
public string LoginMode { get; }
```

- *Type:* string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; }
```

- *Type:* string[]

---

##### `LoginUri`<sup>Required</sup> <a name="LoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri"></a>

```csharp
public string LoginUri { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri"></a>

```csharp
public string LogoUri { get; }
```

- *Type:* string

---

##### `OmitSecret`<sup>Required</sup> <a name="OmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret"></a>

```csharp
public object OmitSecret { get; }
```

- *Type:* object

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; }
```

- *Type:* object

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri"></a>

```csharp
public string PolicyUri { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; }
```

- *Type:* string[]

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `RefreshTokenLeeway`<sup>Required</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway"></a>

```csharp
public double RefreshTokenLeeway { get; }
```

- *Type:* double

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation"></a>

```csharp
public string RefreshTokenRotation { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; }
```

- *Type:* string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri"></a>

```csharp
public string TosUri { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

##### `WildcardRedirect`<sup>Required</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect"></a>

```csharp
public string WildcardRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppConfig <a name="OauthAppConfig" id="@cdktf/provider-okta.oauthApp.OauthAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppConfig {
    object Connection = null,
    object Count = null,
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
    OauthAppGroupsClaim GroupsClaim = null,
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
    OauthAppTimeouts Timeouts = null,
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
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type">Type</a></code> | <code>string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>object</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri">ClientUri</a></code> | <code>string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod">ConsentMethod</a></code> | <code>string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId">CustomClientId</a></code> | <code>string</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks">Jwks</a></code> | <code>object</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode">LoginMode</a></code> | <code>string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes">LoginScopes</a></code> | <code>string[]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri">LoginUri</a></code> | <code>string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri">LogoUri</a></code> | <code>string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret">OmitSecret</a></code> | <code>object</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired">PkceRequired</a></code> | <code>object</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri">PolicyUri</a></code> | <code>string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile">Profile</a></code> | <code>string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>double</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>string</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri">TosUri</a></code> | <code>string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users">Users</a></code> | <code>object</code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect">WildcardRedirect</a></code> | <code>string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#label OauthApp#label}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#admin_note OauthApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; set; }
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `AutoKeyRotation`<sup>Optional</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation"></a>

```csharp
public object AutoKeyRotation { get; set; }
```

- *Type:* object

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `ClientBasicSecret`<sup>Optional</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret"></a>

```csharp
public string ClientBasicSecret { get; set; }
```

- *Type:* string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_id OauthApp#client_id}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri"></a>

```csharp
public string ClientUri { get; set; }
```

- *Type:* string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_uri OauthApp#client_uri}

---

##### `ConsentMethod`<sup>Optional</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod"></a>

```csharp
public string ConsentMethod { get; set; }
```

- *Type:* string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#consent_method OauthApp#consent_method}

---

##### `CustomClientId`<sup>Optional</sup> <a name="CustomClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId"></a>

```csharp
public string CustomClientId { get; set; }
```

- *Type:* string

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; set; }
```

- *Type:* string[]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#grant_types OauthApp#grant_types}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups OauthApp#groups}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim"></a>

```csharp
public OauthAppGroupsClaim GroupsClaim { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_web OauthApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; set; }
```

- *Type:* object

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks"></a>

```csharp
public object Jwks { get; set; }
```

- *Type:* object

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#jwks OauthApp#jwks}

---

##### `LoginMode`<sup>Optional</sup> <a name="LoginMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode"></a>

```csharp
public string LoginMode { get; set; }
```

- *Type:* string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_mode OauthApp#login_mode}

---

##### `LoginScopes`<sup>Optional</sup> <a name="LoginScopes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes"></a>

```csharp
public string[] LoginScopes { get; set; }
```

- *Type:* string[]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `LoginUri`<sup>Optional</sup> <a name="LoginUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri"></a>

```csharp
public string LoginUri { get; set; }
```

- *Type:* string

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_uri OauthApp#login_uri}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo OauthApp#logo}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri"></a>

```csharp
public string LogoUri { get; set; }
```

- *Type:* string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `OmitSecret`<sup>Optional</sup> <a name="OmitSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret"></a>

```csharp
public object OmitSecret { get; set; }
```

- *Type:* object

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired"></a>

```csharp
public object PkceRequired { get; set; }
```

- *Type:* object

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri"></a>

```csharp
public string PolicyUri { get; set; }
```

- *Type:* string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; set; }
```

- *Type:* string[]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#profile OauthApp#profile}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `RefreshTokenLeeway`<sup>Optional</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway"></a>

```csharp
public double RefreshTokenLeeway { get; set; }
```

- *Type:* double

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation"></a>

```csharp
public string RefreshTokenRotation { get; set; }
```

- *Type:* string

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `ResponseTypes`<sup>Optional</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; set; }
```

- *Type:* string[]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#response_types OauthApp#response_types}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_users OauthApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#status OauthApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts"></a>

```csharp
public OauthAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#timeouts OauthApp#timeouts}

---

##### `TokenEndpointAuthMethod`<sup>Optional</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; set; }
```

- *Type:* string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri"></a>

```csharp
public string TosUri { get; set; }
```

- *Type:* string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#users OauthApp#users}

---

##### `WildcardRedirect`<sup>Optional</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect"></a>

```csharp
public string WildcardRedirect { get; set; }
```

- *Type:* string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

### OauthAppGroupsClaim <a name="OauthAppGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppGroupsClaim {
    string Name,
    string Type,
    string Value,
    string FilterType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name">Name</a></code> | <code>string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type">Type</a></code> | <code>string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value">Value</a></code> | <code>string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType">FilterType</a></code> | <code>string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#name OauthApp#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#value OauthApp#value}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#filter_type OauthApp#filter_type}

---

### OauthAppJwks <a name="OauthAppJwks" id="@cdktf/provider-okta.oauthApp.OauthAppJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppJwks {
    string Kid,
    string Kty,
    string E = null,
    string N = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid">Kid</a></code> | <code>string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty">Kty</a></code> | <code>string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e">E</a></code> | <code>string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n">N</a></code> | <code>string</code> | RSA Modulus. |

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid"></a>

```csharp
public string Kid { get; set; }
```

- *Type:* string

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kid OauthApp#kid}

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty"></a>

```csharp
public string Kty { get; set; }
```

- *Type:* string

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kty OauthApp#kty}

---

##### `E`<sup>Optional</sup> <a name="E" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e"></a>

```csharp
public string E { get; set; }
```

- *Type:* string

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#e OauthApp#e}

---

##### `N`<sup>Optional</sup> <a name="N" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n"></a>

```csharp
public string N { get; set; }
```

- *Type:* string

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#n OauthApp#n}

---

### OauthAppTimeouts <a name="OauthAppTimeouts" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}.

---

### OauthAppUsers <a name="OauthAppUsers" id="@cdktf/provider-okta.oauthApp.OauthAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#password OauthApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#username OauthApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthAppGroupsClaimOutputReference <a name="OauthAppGroupsClaimOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppGroupsClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue"></a>

```csharp
public OauthAppGroupsClaim InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---


### OauthAppJwksList <a name="OauthAppJwksList" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppJwksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get"></a>

```csharp
private OauthAppJwksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OauthAppJwksOutputReference <a name="OauthAppJwksOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppJwksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE">ResetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN">ResetN</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetE` <a name="ResetE" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE"></a>

```csharp
private void ResetE()
```

##### `ResetN` <a name="ResetN" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN"></a>

```csharp
private void ResetN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput">EInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput">KidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput">KtyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput">NInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EInput`<sup>Optional</sup> <a name="EInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput"></a>

```csharp
public string EInput { get; }
```

- *Type:* string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput"></a>

```csharp
public string KidInput { get; }
```

- *Type:* string

---

##### `KtyInput`<sup>Optional</sup> <a name="KtyInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput"></a>

```csharp
public string KtyInput { get; }
```

- *Type:* string

---

##### `NInput`<sup>Optional</sup> <a name="NInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput"></a>

```csharp
public string NInput { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OauthAppTimeoutsOutputReference <a name="OauthAppTimeoutsOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OauthAppUsersList <a name="OauthAppUsersList" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get"></a>

```csharp
private OauthAppUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OauthAppUsersOutputReference <a name="OauthAppUsersOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OauthAppUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



