# `samlApp` Submodule <a name="`samlApp` Submodule" id="@cdktf/provider-okta.samlApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlApp <a name="SamlApp" id="@cdktf/provider-okta.samlApp.SamlApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_app okta_saml_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlApp(Construct Scope, string Id, SamlAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements">PutAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints">ResetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned">ResetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements">ResetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef">ResetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm">ResetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn">ResetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer">ResetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid">ResetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed">ResetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned">ResetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled">ResetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion">ResetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate">ResetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer">ResetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl">ResetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer">ResetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl">ResetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat">ResetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate">ResetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.samlApp.SamlApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttributeStatements` <a name="PutAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements"></a>

```csharp
private void PutAttributeStatements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts"></a>

```csharp
private void PutTimeouts(SamlAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAcsEndpoints` <a name="ResetAcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints"></a>

```csharp
private void ResetAcsEndpoints()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson"></a>

```csharp
private void ResetAppSettingsJson()
```

##### `ResetAssertionSigned` <a name="ResetAssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned"></a>

```csharp
private void ResetAssertionSigned()
```

##### `ResetAttributeStatements` <a name="ResetAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements"></a>

```csharp
private void ResetAttributeStatements()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-okta.samlApp.SamlApp.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAuthnContextClassRef` <a name="ResetAuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef"></a>

```csharp
private void ResetAuthnContextClassRef()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState"></a>

```csharp
private void ResetDefaultRelayState()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-okta.samlApp.SamlApp.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetDigestAlgorithm` <a name="ResetDigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm"></a>

```csharp
private void ResetDigestAlgorithm()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetHonorForceAuthn` <a name="ResetHonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn"></a>

```csharp
private void ResetHonorForceAuthn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlApp.SamlApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpIssuer` <a name="ResetIdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer"></a>

```csharp
private void ResetIdpIssuer()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment"></a>

```csharp
private void ResetImplicitAssignment()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId"></a>

```csharp
private void ResetInlineHookId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetKeyYearsValid` <a name="ResetKeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid"></a>

```csharp
private void ResetKeyYearsValid()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.samlApp.SamlApp.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp"></a>

```csharp
private void ResetPreconfiguredApp()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-okta.samlApp.SamlApp.resetRecipient"></a>

```csharp
private void ResetRecipient()
```

##### `ResetRequestCompressed` <a name="ResetRequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed"></a>

```csharp
private void ResetRequestCompressed()
```

##### `ResetResponseSigned` <a name="ResetResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned"></a>

```csharp
private void ResetResponseSigned()
```

##### `ResetSamlSignedRequestEnabled` <a name="ResetSamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled"></a>

```csharp
private void ResetSamlSignedRequestEnabled()
```

##### `ResetSamlVersion` <a name="ResetSamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion"></a>

```csharp
private void ResetSamlVersion()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```

##### `ResetSingleLogoutCertificate` <a name="ResetSingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate"></a>

```csharp
private void ResetSingleLogoutCertificate()
```

##### `ResetSingleLogoutIssuer` <a name="ResetSingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer"></a>

```csharp
private void ResetSingleLogoutIssuer()
```

##### `ResetSingleLogoutUrl` <a name="ResetSingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl"></a>

```csharp
private void ResetSingleLogoutUrl()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetSpIssuer` <a name="ResetSpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer"></a>

```csharp
private void ResetSpIssuer()
```

##### `ResetSsoUrl` <a name="ResetSsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl"></a>

```csharp
private void ResetSsoUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectNameIdFormat` <a name="ResetSubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat"></a>

```csharp
private void ResetSubjectNameIdFormat()
```

##### `ResetSubjectNameIdTemplate` <a name="ResetSubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate"></a>

```csharp
private void ResetSubjectNameIdTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetUsers"></a>

```csharp
private void ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements">AttributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl">EmbedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityKey">EntityKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl">EntityUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.features">Features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding">HttpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl">MetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput">AcsEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput">AssertionSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput">AttributeStatementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput">AuthnContextClassRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput">DigestAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput">HonorForceAuthnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput">IdpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput">KeyYearsValidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput">RecipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput">RequestCompressedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput">ResponseSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput">SamlSignedRequestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput">SamlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput">SingleLogoutCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput">SingleLogoutIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput">SingleLogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput">SpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput">SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput">SubjectNameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput">SubjectNameIdTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints">AcsEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned">AssertionSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer">IdpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid">KeyYearsValid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned">ResponseSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion">SamlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer">SpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.samlApp.SamlApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlApp.SamlApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlApp.SamlApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlApp.SamlApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlApp.SamlApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttributeStatements`<sup>Required</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements"></a>

```csharp
public SamlAppAttributeStatementsList AttributeStatements { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `EmbedUrl`<sup>Required</sup> <a name="EmbedUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl"></a>

```csharp
public string EmbedUrl { get; }
```

- *Type:* string

---

##### `EntityKey`<sup>Required</sup> <a name="EntityKey" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityKey"></a>

```csharp
public string EntityKey { get; }
```

- *Type:* string

---

##### `EntityUrl`<sup>Required</sup> <a name="EntityUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl"></a>

```csharp
public string EntityUrl { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.samlApp.SamlApp.property.features"></a>

```csharp
public string[] Features { get; }
```

- *Type:* string[]

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding"></a>

```csharp
public string HttpPostBinding { get; }
```

- *Type:* string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding"></a>

```csharp
public string HttpRedirectBinding { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-okta.samlApp.SamlApp.property.keys"></a>

```csharp
public SamlAppKeysList Keys { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl"></a>

```csharp
public string MetadataUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeouts"></a>

```csharp
public SamlAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.samlApp.SamlApp.property.users"></a>

```csharp
public SamlAppUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AcsEndpointsInput`<sup>Optional</sup> <a name="AcsEndpointsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput"></a>

```csharp
public string[] AcsEndpointsInput { get; }
```

- *Type:* string[]

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput"></a>

```csharp
public string AppSettingsJsonInput { get; }
```

- *Type:* string

---

##### `AssertionSignedInput`<sup>Optional</sup> <a name="AssertionSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput"></a>

```csharp
public object AssertionSignedInput { get; }
```

- *Type:* object

---

##### `AttributeStatementsInput`<sup>Optional</sup> <a name="AttributeStatementsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput"></a>

```csharp
public object AttributeStatementsInput { get; }
```

- *Type:* object

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AuthnContextClassRefInput`<sup>Optional</sup> <a name="AuthnContextClassRefInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput"></a>

```csharp
public string AuthnContextClassRefInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput"></a>

```csharp
public string DefaultRelayStateInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DigestAlgorithmInput`<sup>Optional</sup> <a name="DigestAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput"></a>

```csharp
public string DigestAlgorithmInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `HonorForceAuthnInput`<sup>Optional</sup> <a name="HonorForceAuthnInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput"></a>

```csharp
public object HonorForceAuthnInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpIssuerInput`<sup>Optional</sup> <a name="IdpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput"></a>

```csharp
public string IdpIssuerInput { get; }
```

- *Type:* string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput"></a>

```csharp
public object ImplicitAssignmentInput { get; }
```

- *Type:* object

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput"></a>

```csharp
public string InlineHookIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyYearsValidInput`<sup>Optional</sup> <a name="KeyYearsValidInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput"></a>

```csharp
public double KeyYearsValidInput { get; }
```

- *Type:* double

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput"></a>

```csharp
public string PreconfiguredAppInput { get; }
```

- *Type:* string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput"></a>

```csharp
public string RecipientInput { get; }
```

- *Type:* string

---

##### `RequestCompressedInput`<sup>Optional</sup> <a name="RequestCompressedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput"></a>

```csharp
public object RequestCompressedInput { get; }
```

- *Type:* object

---

##### `ResponseSignedInput`<sup>Optional</sup> <a name="ResponseSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput"></a>

```csharp
public object ResponseSignedInput { get; }
```

- *Type:* object

---

##### `SamlSignedRequestEnabledInput`<sup>Optional</sup> <a name="SamlSignedRequestEnabledInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput"></a>

```csharp
public object SamlSignedRequestEnabledInput { get; }
```

- *Type:* object

---

##### `SamlVersionInput`<sup>Optional</sup> <a name="SamlVersionInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput"></a>

```csharp
public string SamlVersionInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SingleLogoutCertificateInput`<sup>Optional</sup> <a name="SingleLogoutCertificateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput"></a>

```csharp
public string SingleLogoutCertificateInput { get; }
```

- *Type:* string

---

##### `SingleLogoutIssuerInput`<sup>Optional</sup> <a name="SingleLogoutIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput"></a>

```csharp
public string SingleLogoutIssuerInput { get; }
```

- *Type:* string

---

##### `SingleLogoutUrlInput`<sup>Optional</sup> <a name="SingleLogoutUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput"></a>

```csharp
public string SingleLogoutUrlInput { get; }
```

- *Type:* string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `SpIssuerInput`<sup>Optional</sup> <a name="SpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput"></a>

```csharp
public string SpIssuerInput { get; }
```

- *Type:* string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput"></a>

```csharp
public string SsoUrlInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectNameIdFormatInput`<sup>Optional</sup> <a name="SubjectNameIdFormatInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput"></a>

```csharp
public string SubjectNameIdFormatInput { get; }
```

- *Type:* string

---

##### `SubjectNameIdTemplateInput`<sup>Optional</sup> <a name="SubjectNameIdTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput"></a>

```csharp
public string SubjectNameIdTemplateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AcsEndpoints`<sup>Required</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints"></a>

```csharp
public string[] AcsEndpoints { get; }
```

- *Type:* string[]

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; }
```

- *Type:* string

---

##### `AssertionSigned`<sup>Required</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned"></a>

```csharp
public object AssertionSigned { get; }
```

- *Type:* object

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.samlApp.SamlApp.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `AuthnContextClassRef`<sup>Required</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef"></a>

```csharp
public string AuthnContextClassRef { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-okta.samlApp.SamlApp.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `HonorForceAuthn`<sup>Required</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn"></a>

```csharp
public object HonorForceAuthn { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpIssuer`<sup>Required</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer"></a>

```csharp
public string IdpIssuer { get; }
```

- *Type:* string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; }
```

- *Type:* object

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyYearsValid`<sup>Required</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid"></a>

```csharp
public double KeyYearsValid { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.samlApp.SamlApp.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.samlApp.SamlApp.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; }
```

- *Type:* string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `RequestCompressed`<sup>Required</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; }
```

- *Type:* object

---

##### `ResponseSigned`<sup>Required</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned"></a>

```csharp
public object ResponseSigned { get; }
```

- *Type:* object

---

##### `SamlSignedRequestEnabled`<sup>Required</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled"></a>

```csharp
public object SamlSignedRequestEnabled { get; }
```

- *Type:* object

---

##### `SamlVersion`<sup>Required</sup> <a name="SamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion"></a>

```csharp
public string SamlVersion { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SingleLogoutCertificate`<sup>Required</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate"></a>

```csharp
public string SingleLogoutCertificate { get; }
```

- *Type:* string

---

##### `SingleLogoutIssuer`<sup>Required</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer"></a>

```csharp
public string SingleLogoutIssuer { get; }
```

- *Type:* string

---

##### `SingleLogoutUrl`<sup>Required</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl"></a>

```csharp
public string SingleLogoutUrl { get; }
```

- *Type:* string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `SpIssuer`<sup>Required</sup> <a name="SpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer"></a>

```csharp
public string SpIssuer { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.samlApp.SamlApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectNameIdFormat`<sup>Required</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat"></a>

```csharp
public string SubjectNameIdFormat { get; }
```

- *Type:* string

---

##### `SubjectNameIdTemplate`<sup>Required</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate"></a>

```csharp
public string SubjectNameIdTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAppAttributeStatements <a name="SamlAppAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppAttributeStatements {
    string Name,
    string FilterType = null,
    string FilterValue = null,
    string Namespace = null,
    string Type = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name">Name</a></code> | <code>string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType">FilterType</a></code> | <code>string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue">FilterValue</a></code> | <code>string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace">Namespace</a></code> | <code>string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type">Type</a></code> | <code>string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#name SamlApp#name}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_type SamlApp#filter_type}

---

##### `FilterValue`<sup>Optional</sup> <a name="FilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue"></a>

```csharp
public string FilterValue { get; set; }
```

- *Type:* string

Filter value to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_value SamlApp#filter_value}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The name format of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#namespace SamlApp#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#type SamlApp#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}.

---

### SamlAppConfig <a name="SamlAppConfig" id="@cdktf/provider-okta.samlApp.SamlAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string[] AcsEndpoints = null,
    string AdminNote = null,
    string AppLinksJson = null,
    string AppSettingsJson = null,
    object AssertionSigned = null,
    object AttributeStatements = null,
    string Audience = null,
    string AuthenticationPolicy = null,
    string AuthnContextClassRef = null,
    object AutoSubmitToolbar = null,
    string DefaultRelayState = null,
    string Destination = null,
    string DigestAlgorithm = null,
    string EnduserNote = null,
    string[] Groups = null,
    object HideIos = null,
    object HideWeb = null,
    object HonorForceAuthn = null,
    string Id = null,
    string IdpIssuer = null,
    object ImplicitAssignment = null,
    string InlineHookId = null,
    string KeyName = null,
    double KeyYearsValid = null,
    string Logo = null,
    string PreconfiguredApp = null,
    string Recipient = null,
    object RequestCompressed = null,
    object ResponseSigned = null,
    object SamlSignedRequestEnabled = null,
    string SamlVersion = null,
    string SignatureAlgorithm = null,
    string SingleLogoutCertificate = null,
    string SingleLogoutIssuer = null,
    string SingleLogoutUrl = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string SpIssuer = null,
    string SsoUrl = null,
    string Status = null,
    string SubjectNameIdFormat = null,
    string SubjectNameIdTemplate = null,
    SamlAppTimeouts Timeouts = null,
    string UserNameTemplate = null,
    string UserNameTemplatePushStatus = null,
    string UserNameTemplateSuffix = null,
    string UserNameTemplateType = null,
    object Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints">AcsEndpoints</a></code> | <code>string[]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned">AssertionSigned</a></code> | <code>object</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements">AttributeStatements</a></code> | <code>object</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience">Audience</a></code> | <code>string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination">Destination</a></code> | <code>string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>object</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer">IdpIssuer</a></code> | <code>string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>object</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName">KeyName</a></code> | <code>string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid">KeyYearsValid</a></code> | <code>double</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient">Recipient</a></code> | <code>string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned">ResponseSigned</a></code> | <code>object</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>object</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion">SamlVersion</a></code> | <code>string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer">SpIssuer</a></code> | <code>string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.users">Users</a></code> | <code>object</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `AcsEndpoints`<sup>Optional</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints"></a>

```csharp
public string[] AcsEndpoints { get; set; }
```

- *Type:* string[]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; set; }
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `AssertionSigned`<sup>Optional</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned"></a>

```csharp
public object AssertionSigned { get; set; }
```

- *Type:* object

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `AttributeStatements`<sup>Optional</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements"></a>

```csharp
public object AttributeStatements { get; set; }
```

- *Type:* object

attribute_statements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience Restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `AuthnContextClassRef`<sup>Optional</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef"></a>

```csharp
public string AuthnContextClassRef { get; set; }
```

- *Type:* string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; set; }
```

- *Type:* string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}

---

##### `DigestAlgorithm`<sup>Optional</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; set; }
```

- *Type:* string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}

---

##### `HonorForceAuthn`<sup>Optional</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn"></a>

```csharp
public object HonorForceAuthn { get; set; }
```

- *Type:* object

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpIssuer`<sup>Optional</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer"></a>

```csharp
public string IdpIssuer { get; set; }
```

- *Type:* string

SAML issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment"></a>

```csharp
public object ImplicitAssignment { get; set; }
```

- *Type:* object

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; set; }
```

- *Type:* string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}

---

##### `KeyYearsValid`<sup>Optional</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid"></a>

```csharp
public double KeyYearsValid { get; set; }
```

- *Type:* double

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp"></a>

```csharp
public string PreconfiguredApp { get; set; }
```

- *Type:* string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient"></a>

```csharp
public string Recipient { get; set; }
```

- *Type:* string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}

---

##### `RequestCompressed`<sup>Optional</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; set; }
```

- *Type:* object

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}

---

##### `ResponseSigned`<sup>Optional</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned"></a>

```csharp
public object ResponseSigned { get; set; }
```

- *Type:* object

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}

---

##### `SamlSignedRequestEnabled`<sup>Optional</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled"></a>

```csharp
public object SamlSignedRequestEnabled { get; set; }
```

- *Type:* object

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_signed_request_enabled SamlApp#saml_signed_request_enabled}

---

##### `SamlVersion`<sup>Optional</sup> <a name="SamlVersion" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion"></a>

```csharp
public string SamlVersion { get; set; }
```

- *Type:* string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `SingleLogoutCertificate`<sup>Optional</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate"></a>

```csharp
public string SingleLogoutCertificate { get; set; }
```

- *Type:* string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `SingleLogoutIssuer`<sup>Optional</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer"></a>

```csharp
public string SingleLogoutIssuer { get; set; }
```

- *Type:* string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `SingleLogoutUrl`<sup>Optional</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl"></a>

```csharp
public string SingleLogoutUrl { get; set; }
```

- *Type:* string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}

---

##### `SpIssuer`<sup>Optional</sup> <a name="SpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer"></a>

```csharp
public string SpIssuer { get; set; }
```

- *Type:* string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `SsoUrl`<sup>Optional</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; set; }
```

- *Type:* string

Single Sign On URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}

---

##### `SubjectNameIdFormat`<sup>Optional</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat"></a>

```csharp
public string SubjectNameIdFormat { get; set; }
```

- *Type:* string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `SubjectNameIdTemplate`<sup>Optional</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate"></a>

```csharp
public string SubjectNameIdTemplate { get; set; }
```

- *Type:* string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts"></a>

```csharp
public SamlAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#timeouts SamlApp#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}

---

### SamlAppKeys <a name="SamlAppKeys" id="@cdktf/provider-okta.samlApp.SamlAppKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppKeys {

};
```


### SamlAppTimeouts <a name="SamlAppTimeouts" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}.

---

### SamlAppUsers <a name="SamlAppUsers" id="@cdktf/provider-okta.samlApp.SamlAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#password SamlApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#username SamlApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAppAttributeStatementsList <a name="SamlAppAttributeStatementsList" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppAttributeStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get"></a>

```csharp
private SamlAppAttributeStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SamlAppAttributeStatementsOutputReference <a name="SamlAppAttributeStatementsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppAttributeStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue">ResetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```

##### `ResetFilterValue` <a name="ResetFilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue"></a>

```csharp
private void ResetFilterValue()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput">FilterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue">FilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `FilterValueInput`<sup>Optional</sup> <a name="FilterValueInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput"></a>

```csharp
public string FilterValueInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `FilterValue`<sup>Required</sup> <a name="FilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue"></a>

```csharp
public string FilterValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SamlAppKeysList <a name="SamlAppKeysList" id="@cdktf/provider-okta.samlApp.SamlAppKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get"></a>

```csharp
private SamlAppKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SamlAppKeysOutputReference <a name="SamlAppKeysOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use">Use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C">X5C</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256">X5TS256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use"></a>

```csharp
public string Use { get; }
```

- *Type:* string

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C"></a>

```csharp
public string[] X5C { get; }
```

- *Type:* string[]

---

##### `X5TS256`<sup>Required</sup> <a name="X5TS256" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256"></a>

```csharp
public string X5TS256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue"></a>

```csharp
public SamlAppKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a>

---


### SamlAppTimeoutsOutputReference <a name="SamlAppTimeoutsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SamlAppUsersList <a name="SamlAppUsersList" id="@cdktf/provider-okta.samlApp.SamlAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get"></a>

```csharp
private SamlAppUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SamlAppUsersOutputReference <a name="SamlAppUsersOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlAppUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



