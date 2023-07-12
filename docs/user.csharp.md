# `okta_user`

Refer to the Terraform Registory for docs: [`okta_user`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-okta.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-okta.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.putPasswordHash">PutPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCostCenter">ResetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributes">ResetCustomProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore">ResetCustomProfileAttributesToIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDivision">ResetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetEmployeeNumber">ResetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate">ResetExpirePasswordOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificPrefix">ResetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificSuffix">ResetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManager">ResetManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManagerId">ResetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMobilePhone">ResetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetNickName">ResetNickName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOldPassword">ResetOldPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordHash">ResetPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordInlineHook">ResetPasswordInlineHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPostalAddress">ResetPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPrimaryPhone">ResetPrimaryPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetProfileUrl">ResetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryAnswer">ResetRecoveryAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryQuestion">ResetRecoveryQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSecondEmail">ResetSecondEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSkipRoles">ResetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetUserType">ResetUserType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.user.User.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPasswordHash` <a name="PutPasswordHash" id="@cdktf/provider-okta.user.User.putPasswordHash"></a>

```csharp
private void PutPasswordHash(UserPasswordHash Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-okta.user.User.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCostCenter` <a name="ResetCostCenter" id="@cdktf/provider-okta.user.User.resetCostCenter"></a>

```csharp
private void ResetCostCenter()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-okta.user.User.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetCustomProfileAttributes` <a name="ResetCustomProfileAttributes" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributes"></a>

```csharp
private void ResetCustomProfileAttributes()
```

##### `ResetCustomProfileAttributesToIgnore` <a name="ResetCustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore"></a>

```csharp
private void ResetCustomProfileAttributesToIgnore()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-okta.user.User.resetDepartment"></a>

```csharp
private void ResetDepartment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-okta.user.User.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-okta.user.User.resetDivision"></a>

```csharp
private void ResetDivision()
```

##### `ResetEmployeeNumber` <a name="ResetEmployeeNumber" id="@cdktf/provider-okta.user.User.resetEmployeeNumber"></a>

```csharp
private void ResetEmployeeNumber()
```

##### `ResetExpirePasswordOnCreate` <a name="ResetExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate"></a>

```csharp
private void ResetExpirePasswordOnCreate()
```

##### `ResetHonorificPrefix` <a name="ResetHonorificPrefix" id="@cdktf/provider-okta.user.User.resetHonorificPrefix"></a>

```csharp
private void ResetHonorificPrefix()
```

##### `ResetHonorificSuffix` <a name="ResetHonorificSuffix" id="@cdktf/provider-okta.user.User.resetHonorificSuffix"></a>

```csharp
private void ResetHonorificSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.user.User.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-okta.user.User.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetManager` <a name="ResetManager" id="@cdktf/provider-okta.user.User.resetManager"></a>

```csharp
private void ResetManager()
```

##### `ResetManagerId` <a name="ResetManagerId" id="@cdktf/provider-okta.user.User.resetManagerId"></a>

```csharp
private void ResetManagerId()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktf/provider-okta.user.User.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-okta.user.User.resetMobilePhone"></a>

```csharp
private void ResetMobilePhone()
```

##### `ResetNickName` <a name="ResetNickName" id="@cdktf/provider-okta.user.User.resetNickName"></a>

```csharp
private void ResetNickName()
```

##### `ResetOldPassword` <a name="ResetOldPassword" id="@cdktf/provider-okta.user.User.resetOldPassword"></a>

```csharp
private void ResetOldPassword()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-okta.user.User.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.user.User.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordHash` <a name="ResetPasswordHash" id="@cdktf/provider-okta.user.User.resetPasswordHash"></a>

```csharp
private void ResetPasswordHash()
```

##### `ResetPasswordInlineHook` <a name="ResetPasswordInlineHook" id="@cdktf/provider-okta.user.User.resetPasswordInlineHook"></a>

```csharp
private void ResetPasswordInlineHook()
```

##### `ResetPostalAddress` <a name="ResetPostalAddress" id="@cdktf/provider-okta.user.User.resetPostalAddress"></a>

```csharp
private void ResetPostalAddress()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktf/provider-okta.user.User.resetPreferredLanguage"></a>

```csharp
private void ResetPreferredLanguage()
```

##### `ResetPrimaryPhone` <a name="ResetPrimaryPhone" id="@cdktf/provider-okta.user.User.resetPrimaryPhone"></a>

```csharp
private void ResetPrimaryPhone()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="@cdktf/provider-okta.user.User.resetProfileUrl"></a>

```csharp
private void ResetProfileUrl()
```

##### `ResetRecoveryAnswer` <a name="ResetRecoveryAnswer" id="@cdktf/provider-okta.user.User.resetRecoveryAnswer"></a>

```csharp
private void ResetRecoveryAnswer()
```

##### `ResetRecoveryQuestion` <a name="ResetRecoveryQuestion" id="@cdktf/provider-okta.user.User.resetRecoveryQuestion"></a>

```csharp
private void ResetRecoveryQuestion()
```

##### `ResetSecondEmail` <a name="ResetSecondEmail" id="@cdktf/provider-okta.user.User.resetSecondEmail"></a>

```csharp
private void ResetSecondEmail()
```

##### `ResetSkipRoles` <a name="ResetSkipRoles" id="@cdktf/provider-okta.user.User.resetSkipRoles"></a>

```csharp
private void ResetSkipRoles()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-okta.user.User.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.user.User.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-okta.user.User.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-okta.user.User.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-okta.user.User.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.user.User.resetUserType"></a>

```csharp
private void ResetUserType()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-okta.user.User.resetZipCode"></a>

```csharp
private void ResetZipCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.user.User.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

User.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHash">PasswordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.rawStatus">RawStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenterInput">CostCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesInput">CustomProfileAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput">CustomProfileAttributesToIgnoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.departmentInput">DepartmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.divisionInput">DivisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumberInput">EmployeeNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput">ExpirePasswordOnCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefixInput">HonorificPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffixInput">HonorificSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerIdInput">ManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerInput">ManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickNameInput">NickNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPasswordInput">OldPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHashInput">PasswordHashInput</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHookInput">PasswordInlineHookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddressInput">PostalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhoneInput">PrimaryPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrlInput">ProfileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswerInput">RecoveryAnswerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestionInput">RecoveryQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmailInput">SecondEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRolesInput">SkipRolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCodeInput">ZipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenter">CostCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore">CustomProfileAttributesToIgnore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.department">Department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.division">Division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreate">ExpirePasswordOnCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.manager">Manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerId">ManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickName">NickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPassword">OldPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHook">PasswordInlineHook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddress">PostalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhone">PrimaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswer">RecoveryAnswer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestion">RecoveryQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmail">SecondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRoles">SkipRoles</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.user.User.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PasswordHash`<sup>Required</sup> <a name="PasswordHash" id="@cdktf/provider-okta.user.User.property.passwordHash"></a>

```csharp
public UserPasswordHashOutputReference PasswordHash { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a>

---

##### `RawStatus`<sup>Required</sup> <a name="RawStatus" id="@cdktf/provider-okta.user.User.property.rawStatus"></a>

```csharp
public string RawStatus { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-okta.user.User.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CostCenterInput`<sup>Optional</sup> <a name="CostCenterInput" id="@cdktf/provider-okta.user.User.property.costCenterInput"></a>

```csharp
public string CostCenterInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-okta.user.User.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `CustomProfileAttributesInput`<sup>Optional</sup> <a name="CustomProfileAttributesInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesInput"></a>

```csharp
public string CustomProfileAttributesInput { get; }
```

- *Type:* string

---

##### `CustomProfileAttributesToIgnoreInput`<sup>Optional</sup> <a name="CustomProfileAttributesToIgnoreInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput"></a>

```csharp
public string[] CustomProfileAttributesToIgnoreInput { get; }
```

- *Type:* string[]

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-okta.user.User.property.departmentInput"></a>

```csharp
public string DepartmentInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-okta.user.User.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-okta.user.User.property.divisionInput"></a>

```csharp
public string DivisionInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-okta.user.User.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `EmployeeNumberInput`<sup>Optional</sup> <a name="EmployeeNumberInput" id="@cdktf/provider-okta.user.User.property.employeeNumberInput"></a>

```csharp
public string EmployeeNumberInput { get; }
```

- *Type:* string

---

##### `ExpirePasswordOnCreateInput`<sup>Optional</sup> <a name="ExpirePasswordOnCreateInput" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput"></a>

```csharp
public object ExpirePasswordOnCreateInput { get; }
```

- *Type:* object

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-okta.user.User.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `HonorificPrefixInput`<sup>Optional</sup> <a name="HonorificPrefixInput" id="@cdktf/provider-okta.user.User.property.honorificPrefixInput"></a>

```csharp
public string HonorificPrefixInput { get; }
```

- *Type:* string

---

##### `HonorificSuffixInput`<sup>Optional</sup> <a name="HonorificSuffixInput" id="@cdktf/provider-okta.user.User.property.honorificSuffixInput"></a>

```csharp
public string HonorificSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.user.User.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-okta.user.User.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-okta.user.User.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-okta.user.User.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `ManagerIdInput`<sup>Optional</sup> <a name="ManagerIdInput" id="@cdktf/provider-okta.user.User.property.managerIdInput"></a>

```csharp
public string ManagerIdInput { get; }
```

- *Type:* string

---

##### `ManagerInput`<sup>Optional</sup> <a name="ManagerInput" id="@cdktf/provider-okta.user.User.property.managerInput"></a>

```csharp
public string ManagerInput { get; }
```

- *Type:* string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktf/provider-okta.user.User.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-okta.user.User.property.mobilePhoneInput"></a>

```csharp
public string MobilePhoneInput { get; }
```

- *Type:* string

---

##### `NickNameInput`<sup>Optional</sup> <a name="NickNameInput" id="@cdktf/provider-okta.user.User.property.nickNameInput"></a>

```csharp
public string NickNameInput { get; }
```

- *Type:* string

---

##### `OldPasswordInput`<sup>Optional</sup> <a name="OldPasswordInput" id="@cdktf/provider-okta.user.User.property.oldPasswordInput"></a>

```csharp
public string OldPasswordInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-okta.user.User.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PasswordHashInput`<sup>Optional</sup> <a name="PasswordHashInput" id="@cdktf/provider-okta.user.User.property.passwordHashInput"></a>

```csharp
public UserPasswordHash PasswordHashInput { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `PasswordInlineHookInput`<sup>Optional</sup> <a name="PasswordInlineHookInput" id="@cdktf/provider-okta.user.User.property.passwordInlineHookInput"></a>

```csharp
public string PasswordInlineHookInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.user.User.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-okta.user.User.property.postalAddressInput"></a>

```csharp
public string PostalAddressInput { get; }
```

- *Type:* string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktf/provider-okta.user.User.property.preferredLanguageInput"></a>

```csharp
public string PreferredLanguageInput { get; }
```

- *Type:* string

---

##### `PrimaryPhoneInput`<sup>Optional</sup> <a name="PrimaryPhoneInput" id="@cdktf/provider-okta.user.User.property.primaryPhoneInput"></a>

```csharp
public string PrimaryPhoneInput { get; }
```

- *Type:* string

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="@cdktf/provider-okta.user.User.property.profileUrlInput"></a>

```csharp
public string ProfileUrlInput { get; }
```

- *Type:* string

---

##### `RecoveryAnswerInput`<sup>Optional</sup> <a name="RecoveryAnswerInput" id="@cdktf/provider-okta.user.User.property.recoveryAnswerInput"></a>

```csharp
public string RecoveryAnswerInput { get; }
```

- *Type:* string

---

##### `RecoveryQuestionInput`<sup>Optional</sup> <a name="RecoveryQuestionInput" id="@cdktf/provider-okta.user.User.property.recoveryQuestionInput"></a>

```csharp
public string RecoveryQuestionInput { get; }
```

- *Type:* string

---

##### `SecondEmailInput`<sup>Optional</sup> <a name="SecondEmailInput" id="@cdktf/provider-okta.user.User.property.secondEmailInput"></a>

```csharp
public string SecondEmailInput { get; }
```

- *Type:* string

---

##### `SkipRolesInput`<sup>Optional</sup> <a name="SkipRolesInput" id="@cdktf/provider-okta.user.User.property.skipRolesInput"></a>

```csharp
public object SkipRolesInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-okta.user.User.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.user.User.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-okta.user.User.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-okta.user.User.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.user.User.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.user.User.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-okta.user.User.property.zipCodeInput"></a>

```csharp
public string ZipCodeInput { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.user.User.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-okta.user.User.property.costCenter"></a>

```csharp
public string CostCenter { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-okta.user.User.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CustomProfileAttributes`<sup>Required</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.user.User.property.customProfileAttributes"></a>

```csharp
public string CustomProfileAttributes { get; }
```

- *Type:* string

---

##### `CustomProfileAttributesToIgnore`<sup>Required</sup> <a name="CustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore"></a>

```csharp
public string[] CustomProfileAttributesToIgnore { get; }
```

- *Type:* string[]

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-okta.user.User.property.department"></a>

```csharp
public string Department { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.user.User.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-okta.user.User.property.division"></a>

```csharp
public string Division { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.user.User.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.user.User.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; }
```

- *Type:* string

---

##### `ExpirePasswordOnCreate`<sup>Required</sup> <a name="ExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreate"></a>

```csharp
public object ExpirePasswordOnCreate { get; }
```

- *Type:* object

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.user.User.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.user.User.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; }
```

- *Type:* string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.user.User.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.user.User.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-okta.user.User.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.user.User.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-okta.user.User.property.manager"></a>

```csharp
public string Manager { get; }
```

- *Type:* string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-okta.user.User.property.managerId"></a>

```csharp
public string ManagerId { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-okta.user.User.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-okta.user.User.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; }
```

- *Type:* string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktf/provider-okta.user.User.property.nickName"></a>

```csharp
public string NickName { get; }
```

- *Type:* string

---

##### `OldPassword`<sup>Required</sup> <a name="OldPassword" id="@cdktf/provider-okta.user.User.property.oldPassword"></a>

```csharp
public string OldPassword { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-okta.user.User.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.user.User.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordInlineHook`<sup>Required</sup> <a name="PasswordInlineHook" id="@cdktf/provider-okta.user.User.property.passwordInlineHook"></a>

```csharp
public string PasswordInlineHook { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-okta.user.User.property.postalAddress"></a>

```csharp
public string PostalAddress { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.user.User.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PrimaryPhone`<sup>Required</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.user.User.property.primaryPhone"></a>

```csharp
public string PrimaryPhone { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.user.User.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `RecoveryAnswer`<sup>Required</sup> <a name="RecoveryAnswer" id="@cdktf/provider-okta.user.User.property.recoveryAnswer"></a>

```csharp
public string RecoveryAnswer { get; }
```

- *Type:* string

---

##### `RecoveryQuestion`<sup>Required</sup> <a name="RecoveryQuestion" id="@cdktf/provider-okta.user.User.property.recoveryQuestion"></a>

```csharp
public string RecoveryQuestion { get; }
```

- *Type:* string

---

##### `SecondEmail`<sup>Required</sup> <a name="SecondEmail" id="@cdktf/provider-okta.user.User.property.secondEmail"></a>

```csharp
public string SecondEmail { get; }
```

- *Type:* string

---

##### `SkipRoles`<sup>Required</sup> <a name="SkipRoles" id="@cdktf/provider-okta.user.User.property.skipRoles"></a>

```csharp
public object SkipRoles { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.user.User.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.user.User.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-okta.user.User.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-okta.user.User.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.user.User.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.user.User.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-okta.user.User.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-okta.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    string FirstName,
    string LastName,
    string Login,
    string City = null,
    string CostCenter = null,
    string CountryCode = null,
    string CustomProfileAttributes = null,
    string[] CustomProfileAttributesToIgnore = null,
    string Department = null,
    string DisplayName = null,
    string Division = null,
    string EmployeeNumber = null,
    object ExpirePasswordOnCreate = null,
    string HonorificPrefix = null,
    string HonorificSuffix = null,
    string Id = null,
    string Locale = null,
    string Manager = null,
    string ManagerId = null,
    string MiddleName = null,
    string MobilePhone = null,
    string NickName = null,
    string OldPassword = null,
    string Organization = null,
    string Password = null,
    UserPasswordHash PasswordHash = null,
    string PasswordInlineHook = null,
    string PostalAddress = null,
    string PreferredLanguage = null,
    string PrimaryPhone = null,
    string ProfileUrl = null,
    string RecoveryAnswer = null,
    string RecoveryQuestion = null,
    string SecondEmail = null,
    object SkipRoles = null,
    string State = null,
    string Status = null,
    string StreetAddress = null,
    string Timezone = null,
    string Title = null,
    string UserType = null,
    string ZipCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.email">Email</a></code> | <code>string</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.firstName">FirstName</a></code> | <code>string</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lastName">LastName</a></code> | <code>string</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.login">Login</a></code> | <code>string</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.city">City</a></code> | <code>string</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.costCenter">CostCenter</a></code> | <code>string</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.countryCode">CountryCode</a></code> | <code>string</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>string</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore">CustomProfileAttributesToIgnore</a></code> | <code>string[]</code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.department">Department</a></code> | <code>string</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.division">Division</a></code> | <code>string</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.employeeNumber">EmployeeNumber</a></code> | <code>string</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate">ExpirePasswordOnCreate</a></code> | <code>object</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.locale">Locale</a></code> | <code>string</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.manager">Manager</a></code> | <code>string</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.managerId">ManagerId</a></code> | <code>string</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.middleName">MiddleName</a></code> | <code>string</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>string</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.nickName">NickName</a></code> | <code>string</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.oldPassword">OldPassword</a></code> | <code>string</code> | Old User Password. Should be only set in case the password was not changed using the provider. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.organization">Organization</a></code> | <code>string</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.password">Password</a></code> | <code>string</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordHash">PasswordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook">PasswordInlineHook</a></code> | <code>string</code> | When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.postalAddress">PostalAddress</a></code> | <code>string</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.primaryPhone">PrimaryPhone</a></code> | <code>string</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer">RecoveryAnswer</a></code> | <code>string</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion">RecoveryQuestion</a></code> | <code>string</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.secondEmail">SecondEmail</a></code> | <code>string</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.skipRoles">SkipRoles</a></code> | <code>object</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.state">State</a></code> | <code>string</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.status">Status</a></code> | <code>string</code> | The status of the User in Okta - remove to set user back to active/provisioned. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>string</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.timezone">Timezone</a></code> | <code>string</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.title">Title</a></code> | <code>string</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.userType">UserType</a></code> | <code>string</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.zipCode">ZipCode</a></code> | <code>string</code> | User zipcode or postal code. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.user.UserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.user.UserConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#email User#email}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.user.UserConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#first_name User#first_name}

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.user.UserConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#last_name User#last_name}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.user.UserConfig.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#login User#login}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-okta.user.UserConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#city User#city}

---

##### `CostCenter`<sup>Optional</sup> <a name="CostCenter" id="@cdktf/provider-okta.user.UserConfig.property.costCenter"></a>

```csharp
public string CostCenter { get; set; }
```

- *Type:* string

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#cost_center User#cost_center}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-okta.user.UserConfig.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#country_code User#country_code}

---

##### `CustomProfileAttributes`<sup>Optional</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes"></a>

```csharp
public string CustomProfileAttributes { get; set; }
```

- *Type:* string

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `CustomProfileAttributesToIgnore`<sup>Optional</sup> <a name="CustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore"></a>

```csharp
public string[] CustomProfileAttributesToIgnore { get; set; }
```

- *Type:* string[]

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-okta.user.UserConfig.property.department"></a>

```csharp
public string Department { get; set; }
```

- *Type:* string

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#department User#department}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-okta.user.UserConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#display_name User#display_name}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-okta.user.UserConfig.property.division"></a>

```csharp
public string Division { get; set; }
```

- *Type:* string

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#division User#division}

---

##### `EmployeeNumber`<sup>Optional</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.user.UserConfig.property.employeeNumber"></a>

```csharp
public string EmployeeNumber { get; set; }
```

- *Type:* string

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#employee_number User#employee_number}

---

##### `ExpirePasswordOnCreate`<sup>Optional</sup> <a name="ExpirePasswordOnCreate" id="@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate"></a>

```csharp
public object ExpirePasswordOnCreate { get; set; }
```

- *Type:* object

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `HonorificPrefix`<sup>Optional</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.user.UserConfig.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; set; }
```

- *Type:* string

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `HonorificSuffix`<sup>Optional</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.user.UserConfig.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; set; }
```

- *Type:* string

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.user.UserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-okta.user.UserConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#locale User#locale}

---

##### `Manager`<sup>Optional</sup> <a name="Manager" id="@cdktf/provider-okta.user.UserConfig.property.manager"></a>

```csharp
public string Manager { get; set; }
```

- *Type:* string

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#manager User#manager}

---

##### `ManagerId`<sup>Optional</sup> <a name="ManagerId" id="@cdktf/provider-okta.user.UserConfig.property.managerId"></a>

```csharp
public string ManagerId { get; set; }
```

- *Type:* string

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#manager_id User#manager_id}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktf/provider-okta.user.UserConfig.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#middle_name User#middle_name}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-okta.user.UserConfig.property.mobilePhone"></a>

```csharp
public string MobilePhone { get; set; }
```

- *Type:* string

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `NickName`<sup>Optional</sup> <a name="NickName" id="@cdktf/provider-okta.user.UserConfig.property.nickName"></a>

```csharp
public string NickName { get; set; }
```

- *Type:* string

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#nick_name User#nick_name}

---

##### `OldPassword`<sup>Optional</sup> <a name="OldPassword" id="@cdktf/provider-okta.user.UserConfig.property.oldPassword"></a>

```csharp
public string OldPassword { get; set; }
```

- *Type:* string

Old User Password. Should be only set in case the password was not changed using the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#old_password User#old_password}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-okta.user.UserConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#organization User#organization}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.user.UserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password User#password}

---

##### `PasswordHash`<sup>Optional</sup> <a name="PasswordHash" id="@cdktf/provider-okta.user.UserConfig.property.passwordHash"></a>

```csharp
public UserPasswordHash PasswordHash { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password_hash User#password_hash}

---

##### `PasswordInlineHook`<sup>Optional</sup> <a name="PasswordInlineHook" id="@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook"></a>

```csharp
public string PasswordInlineHook { get; set; }
```

- *Type:* string

When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `PostalAddress`<sup>Optional</sup> <a name="PostalAddress" id="@cdktf/provider-okta.user.UserConfig.property.postalAddress"></a>

```csharp
public string PostalAddress { get; set; }
```

- *Type:* string

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#postal_address User#postal_address}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.user.UserConfig.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; set; }
```

- *Type:* string

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `PrimaryPhone`<sup>Optional</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.user.UserConfig.property.primaryPhone"></a>

```csharp
public string PrimaryPhone { get; set; }
```

- *Type:* string

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.user.UserConfig.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; set; }
```

- *Type:* string

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#profile_url User#profile_url}

---

##### `RecoveryAnswer`<sup>Optional</sup> <a name="RecoveryAnswer" id="@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer"></a>

```csharp
public string RecoveryAnswer { get; set; }
```

- *Type:* string

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `RecoveryQuestion`<sup>Optional</sup> <a name="RecoveryQuestion" id="@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion"></a>

```csharp
public string RecoveryQuestion { get; set; }
```

- *Type:* string

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `SecondEmail`<sup>Optional</sup> <a name="SecondEmail" id="@cdktf/provider-okta.user.UserConfig.property.secondEmail"></a>

```csharp
public string SecondEmail { get; set; }
```

- *Type:* string

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#second_email User#second_email}

---

##### `SkipRoles`<sup>Optional</sup> <a name="SkipRoles" id="@cdktf/provider-okta.user.UserConfig.property.skipRoles"></a>

```csharp
public object SkipRoles { get; set; }
```

- *Type:* object

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-okta.user.UserConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#state User#state}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.user.UserConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the User in Okta - remove to set user back to active/provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#status User#status}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-okta.user.UserConfig.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#street_address User#street_address}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-okta.user.UserConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#timezone User#timezone}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-okta.user.UserConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#title User#title}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.user.UserConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#user_type User#user_type}

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-okta.user.UserConfig.property.zipCode"></a>

```csharp
public string ZipCode { get; set; }
```

- *Type:* string

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#zip_code User#zip_code}

---

### UserPasswordHash <a name="UserPasswordHash" id="@cdktf/provider-okta.user.UserPasswordHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserPasswordHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserPasswordHash {
    string Algorithm,
    string Value,
    string Salt = null,
    string SaltOrder = null,
    double WorkFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm used to generate the hash using the password. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.value">Value</a></code> | <code>string</code> | For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.salt">Salt</a></code> | <code>string</code> | Only required for salted hashes. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder">SaltOrder</a></code> | <code>string</code> | Specifies whether salt was pre- or postfixed to the password before hashing. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.workFactor">WorkFactor</a></code> | <code>double</code> | Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-okta.user.UserPasswordHash.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#algorithm User#algorithm}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.UserPasswordHash.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#value User#value}

---

##### `Salt`<sup>Optional</sup> <a name="Salt" id="@cdktf/provider-okta.user.UserPasswordHash.property.salt"></a>

```csharp
public string Salt { get; set; }
```

- *Type:* string

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#salt User#salt}

---

##### `SaltOrder`<sup>Optional</sup> <a name="SaltOrder" id="@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder"></a>

```csharp
public string SaltOrder { get; set; }
```

- *Type:* string

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#salt_order User#salt_order}

---

##### `WorkFactor`<sup>Optional</sup> <a name="WorkFactor" id="@cdktf/provider-okta.user.UserPasswordHash.property.workFactor"></a>

```csharp
public double WorkFactor { get; set; }
```

- *Type:* double

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#work_factor User#work_factor}

---

## Classes <a name="Classes" id="Classes"></a>

### UserPasswordHashOutputReference <a name="UserPasswordHashOutputReference" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserPasswordHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt">ResetSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder">ResetSaltOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor">ResetWorkFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSalt` <a name="ResetSalt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt"></a>

```csharp
private void ResetSalt()
```

##### `ResetSaltOrder` <a name="ResetSaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder"></a>

```csharp
private void ResetSaltOrder()
```

##### `ResetWorkFactor` <a name="ResetWorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor"></a>

```csharp
private void ResetWorkFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput">SaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput">SaltOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput">WorkFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt">Salt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder">SaltOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor">WorkFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `SaltInput`<sup>Optional</sup> <a name="SaltInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput"></a>

```csharp
public string SaltInput { get; }
```

- *Type:* string

---

##### `SaltOrderInput`<sup>Optional</sup> <a name="SaltOrderInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput"></a>

```csharp
public string SaltOrderInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `WorkFactorInput`<sup>Optional</sup> <a name="WorkFactorInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput"></a>

```csharp
public double WorkFactorInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Salt`<sup>Required</sup> <a name="Salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt"></a>

```csharp
public string Salt { get; }
```

- *Type:* string

---

##### `SaltOrder`<sup>Required</sup> <a name="SaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder"></a>

```csharp
public string SaltOrder { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `WorkFactor`<sup>Required</sup> <a name="WorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor"></a>

```csharp
public double WorkFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue"></a>

```csharp
public UserPasswordHash InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---



