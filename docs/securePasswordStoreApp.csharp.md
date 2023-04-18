# `okta_secure_password_store_app`

Refer to the Terraform Registory for docs: [`okta_secure_password_store_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app).

# `securePasswordStoreApp` Submodule <a name="`securePasswordStoreApp` Submodule" id="@cdktf/provider-okta.securePasswordStoreApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurePasswordStoreApp <a name="SecurePasswordStoreApp" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app okta_secure_password_store_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreApp(Construct Scope, string Id, SecurePasswordStoreAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig">SecurePasswordStoreAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1">ResetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value">ResetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2">ResetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value">ResetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3">ResetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value">ResetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurePasswordStoreAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers"></a>

```csharp
private void PutUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl"></a>

```csharp
private void ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl"></a>

```csharp
private void ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService"></a>

```csharp
private void ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote"></a>

```csharp
private void ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson"></a>

```csharp
private void ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar"></a>

```csharp
private void ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme"></a>

```csharp
private void ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote"></a>

```csharp
private void ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos"></a>

```csharp
private void ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb"></a>

```csharp
private void ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetOptionalField1` <a name="ResetOptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1"></a>

```csharp
private void ResetOptionalField1()
```

##### `ResetOptionalField1Value` <a name="ResetOptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value"></a>

```csharp
private void ResetOptionalField1Value()
```

##### `ResetOptionalField2` <a name="ResetOptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2"></a>

```csharp
private void ResetOptionalField2()
```

##### `ResetOptionalField2Value` <a name="ResetOptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value"></a>

```csharp
private void ResetOptionalField2Value()
```

##### `ResetOptionalField3` <a name="ResetOptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3"></a>

```csharp
private void ResetOptionalField3()
```

##### `ResetOptionalField3Value` <a name="ResetOptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value"></a>

```csharp
private void ResetOptionalField3Value()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword"></a>

```csharp
private void ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword"></a>

```csharp
private void ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername"></a>

```csharp
private void ResetSharedUsername()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate"></a>

```csharp
private void ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus"></a>

```csharp
private void ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix"></a>

```csharp
private void ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType"></a>

```csharp
private void ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers"></a>

```csharp
private void ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurePasswordStoreApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurePasswordStoreApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurePasswordStoreApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode">SignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput">HideIosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput">HideWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input">OptionalField1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput">OptionalField1ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input">OptionalField2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput">OptionalField2ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input">OptionalField3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput">OptionalField3ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput">UsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote">AdminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote">EnduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos">HideIos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb">HideWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1">OptionalField1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value">OptionalField1Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2">OptionalField2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value">OptionalField2Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3">OptionalField3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value">OptionalField3Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField">PasswordField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword">RevealPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField">UsernameField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode"></a>

```csharp
public string SignOnMode { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts"></a>

```csharp
public SecurePasswordStoreAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users"></a>

```csharp
public SecurePasswordStoreAppUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput"></a>

```csharp
public string AccessibilityErrorRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput"></a>

```csharp
public string AccessibilityLoginRedirectUrlInput { get; }
```

- *Type:* string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput"></a>

```csharp
public object AccessibilitySelfServiceInput { get; }
```

- *Type:* object

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput"></a>

```csharp
public string AdminNoteInput { get; }
```

- *Type:* string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput"></a>

```csharp
public string AppLinksJsonInput { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput"></a>

```csharp
public object AutoSubmitToolbarInput { get; }
```

- *Type:* object

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput"></a>

```csharp
public string CredentialsSchemeInput { get; }
```

- *Type:* string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput"></a>

```csharp
public string EnduserNoteInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput"></a>

```csharp
public object HideIosInput { get; }
```

- *Type:* object

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput"></a>

```csharp
public object HideWebInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `OptionalField1Input`<sup>Optional</sup> <a name="OptionalField1Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input"></a>

```csharp
public string OptionalField1Input { get; }
```

- *Type:* string

---

##### `OptionalField1ValueInput`<sup>Optional</sup> <a name="OptionalField1ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput"></a>

```csharp
public string OptionalField1ValueInput { get; }
```

- *Type:* string

---

##### `OptionalField2Input`<sup>Optional</sup> <a name="OptionalField2Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input"></a>

```csharp
public string OptionalField2Input { get; }
```

- *Type:* string

---

##### `OptionalField2ValueInput`<sup>Optional</sup> <a name="OptionalField2ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput"></a>

```csharp
public string OptionalField2ValueInput { get; }
```

- *Type:* string

---

##### `OptionalField3Input`<sup>Optional</sup> <a name="OptionalField3Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input"></a>

```csharp
public string OptionalField3Input { get; }
```

- *Type:* string

---

##### `OptionalField3ValueInput`<sup>Optional</sup> <a name="OptionalField3ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput"></a>

```csharp
public string OptionalField3ValueInput { get; }
```

- *Type:* string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput"></a>

```csharp
public string PasswordFieldInput { get; }
```

- *Type:* string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput"></a>

```csharp
public object RevealPasswordInput { get; }
```

- *Type:* object

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput"></a>

```csharp
public string SharedPasswordInput { get; }
```

- *Type:* string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput"></a>

```csharp
public string SharedUsernameInput { get; }
```

- *Type:* string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput"></a>

```csharp
public string UsernameFieldInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput"></a>

```csharp
public string UserNameTemplateInput { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput"></a>

```csharp
public string UserNameTemplatePushStatusInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput"></a>

```csharp
public string UserNameTemplateSuffixInput { get; }
```

- *Type:* string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput"></a>

```csharp
public string UserNameTemplateTypeInput { get; }
```

- *Type:* string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput"></a>

```csharp
public object UsersInput { get; }
```

- *Type:* object

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; }
```

- *Type:* object

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote"></a>

```csharp
public string AdminNote { get; }
```

- *Type:* string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; }
```

- *Type:* object

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; }
```

- *Type:* string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote"></a>

```csharp
public string EnduserNote { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos"></a>

```csharp
public object HideIos { get; }
```

- *Type:* object

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb"></a>

```csharp
public object HideWeb { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `OptionalField1`<sup>Required</sup> <a name="OptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1"></a>

```csharp
public string OptionalField1 { get; }
```

- *Type:* string

---

##### `OptionalField1Value`<sup>Required</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value"></a>

```csharp
public string OptionalField1Value { get; }
```

- *Type:* string

---

##### `OptionalField2`<sup>Required</sup> <a name="OptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2"></a>

```csharp
public string OptionalField2 { get; }
```

- *Type:* string

---

##### `OptionalField2Value`<sup>Required</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value"></a>

```csharp
public string OptionalField2Value { get; }
```

- *Type:* string

---

##### `OptionalField3`<sup>Required</sup> <a name="OptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3"></a>

```csharp
public string OptionalField3 { get; }
```

- *Type:* string

---

##### `OptionalField3Value`<sup>Required</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value"></a>

```csharp
public string OptionalField3Value { get; }
```

- *Type:* string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField"></a>

```csharp
public string PasswordField { get; }
```

- *Type:* string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword"></a>

```csharp
public object RevealPassword { get; }
```

- *Type:* object

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; }
```

- *Type:* string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; }
```

- *Type:* string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField"></a>

```csharp
public string UsernameField { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurePasswordStoreAppConfig <a name="SecurePasswordStoreAppConfig" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Label,
    string PasswordField,
    string Url,
    string UsernameField,
    string AccessibilityErrorRedirectUrl = null,
    string AccessibilityLoginRedirectUrl = null,
    object AccessibilitySelfService = null,
    string AdminNote = null,
    string AppLinksJson = null,
    object AutoSubmitToolbar = null,
    string CredentialsScheme = null,
    string EnduserNote = null,
    string[] Groups = null,
    object HideIos = null,
    object HideWeb = null,
    string Id = null,
    string Logo = null,
    string OptionalField1 = null,
    string OptionalField1Value = null,
    string OptionalField2 = null,
    string OptionalField2Value = null,
    string OptionalField3 = null,
    string OptionalField3Value = null,
    object RevealPassword = null,
    string SharedPassword = null,
    string SharedUsername = null,
    object SkipGroups = null,
    object SkipUsers = null,
    string Status = null,
    SecurePasswordStoreAppTimeouts Timeouts = null,
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
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label">Label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField">PasswordField</a></code> | <code>string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url">Url</a></code> | <code>string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField">UsernameField</a></code> | <code>string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>object</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote">AdminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>object</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>string</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote">EnduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups">Groups</a></code> | <code>string[]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos">HideIos</a></code> | <code>object</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb">HideWeb</a></code> | <code>object</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo">Logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1">OptionalField1</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value">OptionalField1Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2">OptionalField2</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value">OptionalField2Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3">OptionalField3</a></code> | <code>string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value">OptionalField3Value</a></code> | <code>string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword">RevealPassword</a></code> | <code>object</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword">SharedPassword</a></code> | <code>string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername">SharedUsername</a></code> | <code>string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status">Status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users">Users</a></code> | <code>object</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField"></a>

```csharp
public string PasswordField { get; set; }
```

- *Type:* string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField"></a>

```csharp
public string UsernameField { get; set; }
```

- *Type:* string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; set; }
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; set; }
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService"></a>

```csharp
public object AccessibilitySelfService { get; set; }
```

- *Type:* object

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote"></a>

```csharp
public string AdminNote { get; set; }
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson"></a>

```csharp
public string AppLinksJson { get; set; }
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar"></a>

```csharp
public object AutoSubmitToolbar { get; set; }
```

- *Type:* object

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme"></a>

```csharp
public string CredentialsScheme { get; set; }
```

- *Type:* string

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote"></a>

```csharp
public string EnduserNote { get; set; }
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos"></a>

```csharp
public object HideIos { get; set; }
```

- *Type:* object

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb"></a>

```csharp
public object HideWeb { get; set; }
```

- *Type:* object

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `OptionalField1`<sup>Optional</sup> <a name="OptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1"></a>

```csharp
public string OptionalField1 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `OptionalField1Value`<sup>Optional</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value"></a>

```csharp
public string OptionalField1Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `OptionalField2`<sup>Optional</sup> <a name="OptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2"></a>

```csharp
public string OptionalField2 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `OptionalField2Value`<sup>Optional</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value"></a>

```csharp
public string OptionalField2Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `OptionalField3`<sup>Optional</sup> <a name="OptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3"></a>

```csharp
public string OptionalField3 { get; set; }
```

- *Type:* string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `OptionalField3Value`<sup>Optional</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value"></a>

```csharp
public string OptionalField3Value { get; set; }
```

- *Type:* string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword"></a>

```csharp
public object RevealPassword { get; set; }
```

- *Type:* object

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword"></a>

```csharp
public string SharedPassword { get; set; }
```

- *Type:* string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername"></a>

```csharp
public string SharedUsername { get; set; }
```

- *Type:* string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts"></a>

```csharp
public SecurePasswordStoreAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; set; }
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; set; }
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; set; }
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; set; }
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users"></a>

```csharp
public object Users { get; set; }
```

- *Type:* object

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#users SecurePasswordStoreApp#users}

---

### SecurePasswordStoreAppTimeouts <a name="SecurePasswordStoreAppTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

### SecurePasswordStoreAppUsers <a name="SecurePasswordStoreAppUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppUsers {
    string Id = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id">Id</a></code> | <code>string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password">Password</a></code> | <code>string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username">Username</a></code> | <code>string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password SecurePasswordStoreApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username SecurePasswordStoreApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurePasswordStoreAppTimeoutsOutputReference <a name="SecurePasswordStoreAppTimeoutsOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurePasswordStoreAppUsersList <a name="SecurePasswordStoreAppUsersList" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get"></a>

```csharp
private SecurePasswordStoreAppUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurePasswordStoreAppUsersOutputReference <a name="SecurePasswordStoreAppUsersOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurePasswordStoreAppUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



