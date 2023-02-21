# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-okta.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy okta_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PasswordPolicy(Construct Scope, string Id, PasswordPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider">ResetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery">ResetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery">ResetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes">ResetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup">ResetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName">ResetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName">ResetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername">ResetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays">ResetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount">ResetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels">ResetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays">ResetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts">ResetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes">ResetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength">ResetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase">ResetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber">ResetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol">ResetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase">ResetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures">ResetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength">ResetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery">ResetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken">ResetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock">ResetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery">ResetSmsRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthProvider` <a name="ResetAuthProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider"></a>

```csharp
private void ResetAuthProvider()
```

##### `ResetCallRecovery` <a name="ResetCallRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery"></a>

```csharp
private void ResetCallRecovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailRecovery` <a name="ResetEmailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery"></a>

```csharp
private void ResetEmailRecovery()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded"></a>

```csharp
private void ResetGroupsIncluded()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPasswordAutoUnlockMinutes` <a name="ResetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes"></a>

```csharp
private void ResetPasswordAutoUnlockMinutes()
```

##### `ResetPasswordDictionaryLookup` <a name="ResetPasswordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup"></a>

```csharp
private void ResetPasswordDictionaryLookup()
```

##### `ResetPasswordExcludeFirstName` <a name="ResetPasswordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName"></a>

```csharp
private void ResetPasswordExcludeFirstName()
```

##### `ResetPasswordExcludeLastName` <a name="ResetPasswordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName"></a>

```csharp
private void ResetPasswordExcludeLastName()
```

##### `ResetPasswordExcludeUsername` <a name="ResetPasswordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername"></a>

```csharp
private void ResetPasswordExcludeUsername()
```

##### `ResetPasswordExpireWarnDays` <a name="ResetPasswordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays"></a>

```csharp
private void ResetPasswordExpireWarnDays()
```

##### `ResetPasswordHistoryCount` <a name="ResetPasswordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount"></a>

```csharp
private void ResetPasswordHistoryCount()
```

##### `ResetPasswordLockoutNotificationChannels` <a name="ResetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels"></a>

```csharp
private void ResetPasswordLockoutNotificationChannels()
```

##### `ResetPasswordMaxAgeDays` <a name="ResetPasswordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays"></a>

```csharp
private void ResetPasswordMaxAgeDays()
```

##### `ResetPasswordMaxLockoutAttempts` <a name="ResetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts"></a>

```csharp
private void ResetPasswordMaxLockoutAttempts()
```

##### `ResetPasswordMinAgeMinutes` <a name="ResetPasswordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes"></a>

```csharp
private void ResetPasswordMinAgeMinutes()
```

##### `ResetPasswordMinLength` <a name="ResetPasswordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength"></a>

```csharp
private void ResetPasswordMinLength()
```

##### `ResetPasswordMinLowercase` <a name="ResetPasswordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase"></a>

```csharp
private void ResetPasswordMinLowercase()
```

##### `ResetPasswordMinNumber` <a name="ResetPasswordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber"></a>

```csharp
private void ResetPasswordMinNumber()
```

##### `ResetPasswordMinSymbol` <a name="ResetPasswordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol"></a>

```csharp
private void ResetPasswordMinSymbol()
```

##### `ResetPasswordMinUppercase` <a name="ResetPasswordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase"></a>

```csharp
private void ResetPasswordMinUppercase()
```

##### `ResetPasswordShowLockoutFailures` <a name="ResetPasswordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures"></a>

```csharp
private void ResetPasswordShowLockoutFailures()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetQuestionMinLength` <a name="ResetQuestionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength"></a>

```csharp
private void ResetQuestionMinLength()
```

##### `ResetQuestionRecovery` <a name="ResetQuestionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery"></a>

```csharp
private void ResetQuestionRecovery()
```

##### `ResetRecoveryEmailToken` <a name="ResetRecoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken"></a>

```csharp
private void ResetRecoveryEmailToken()
```

##### `ResetSkipUnlock` <a name="ResetSkipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock"></a>

```csharp
private void ResetSkipUnlock()
```

##### `ResetSmsRecovery` <a name="ResetSmsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery"></a>

```csharp
private void ResetSmsRecovery()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput">AuthProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput">CallRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput">EmailRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput">PasswordAutoUnlockMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput">PasswordDictionaryLookupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput">PasswordExcludeFirstNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput">PasswordExcludeLastNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput">PasswordExcludeUsernameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput">PasswordExpireWarnDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput">PasswordHistoryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput">PasswordLockoutNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput">PasswordMaxAgeDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput">PasswordMaxLockoutAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput">PasswordMinAgeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput">PasswordMinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput">PasswordMinLowercaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput">PasswordMinNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput">PasswordMinSymbolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput">PasswordMinUppercaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput">PasswordShowLockoutFailuresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput">QuestionMinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput">QuestionRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput">RecoveryEmailTokenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput">SkipUnlockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput">SmsRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider">AuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery">CallRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery">EmailRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength">PasswordMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength">QuestionMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery">QuestionRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock">SkipUnlock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery">SmsRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthProviderInput`<sup>Optional</sup> <a name="AuthProviderInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput"></a>

```csharp
public string AuthProviderInput { get; }
```

- *Type:* string

---

##### `CallRecoveryInput`<sup>Optional</sup> <a name="CallRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput"></a>

```csharp
public string CallRecoveryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailRecoveryInput`<sup>Optional</sup> <a name="EmailRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput"></a>

```csharp
public string EmailRecoveryInput { get; }
```

- *Type:* string

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput"></a>

```csharp
public string[] GroupsIncludedInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutesInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput"></a>

```csharp
public double PasswordAutoUnlockMinutesInput { get; }
```

- *Type:* double

---

##### `PasswordDictionaryLookupInput`<sup>Optional</sup> <a name="PasswordDictionaryLookupInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput"></a>

```csharp
public object PasswordDictionaryLookupInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeFirstNameInput`<sup>Optional</sup> <a name="PasswordExcludeFirstNameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput"></a>

```csharp
public object PasswordExcludeFirstNameInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeLastNameInput`<sup>Optional</sup> <a name="PasswordExcludeLastNameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput"></a>

```csharp
public object PasswordExcludeLastNameInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeUsernameInput`<sup>Optional</sup> <a name="PasswordExcludeUsernameInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput"></a>

```csharp
public object PasswordExcludeUsernameInput { get; }
```

- *Type:* object

---

##### `PasswordExpireWarnDaysInput`<sup>Optional</sup> <a name="PasswordExpireWarnDaysInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput"></a>

```csharp
public double PasswordExpireWarnDaysInput { get; }
```

- *Type:* double

---

##### `PasswordHistoryCountInput`<sup>Optional</sup> <a name="PasswordHistoryCountInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput"></a>

```csharp
public double PasswordHistoryCountInput { get; }
```

- *Type:* double

---

##### `PasswordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput"></a>

```csharp
public string[] PasswordLockoutNotificationChannelsInput { get; }
```

- *Type:* string[]

---

##### `PasswordMaxAgeDaysInput`<sup>Optional</sup> <a name="PasswordMaxAgeDaysInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput"></a>

```csharp
public double PasswordMaxAgeDaysInput { get; }
```

- *Type:* double

---

##### `PasswordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="PasswordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput"></a>

```csharp
public double PasswordMaxLockoutAttemptsInput { get; }
```

- *Type:* double

---

##### `PasswordMinAgeMinutesInput`<sup>Optional</sup> <a name="PasswordMinAgeMinutesInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput"></a>

```csharp
public double PasswordMinAgeMinutesInput { get; }
```

- *Type:* double

---

##### `PasswordMinLengthInput`<sup>Optional</sup> <a name="PasswordMinLengthInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput"></a>

```csharp
public double PasswordMinLengthInput { get; }
```

- *Type:* double

---

##### `PasswordMinLowercaseInput`<sup>Optional</sup> <a name="PasswordMinLowercaseInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput"></a>

```csharp
public double PasswordMinLowercaseInput { get; }
```

- *Type:* double

---

##### `PasswordMinNumberInput`<sup>Optional</sup> <a name="PasswordMinNumberInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput"></a>

```csharp
public double PasswordMinNumberInput { get; }
```

- *Type:* double

---

##### `PasswordMinSymbolInput`<sup>Optional</sup> <a name="PasswordMinSymbolInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput"></a>

```csharp
public double PasswordMinSymbolInput { get; }
```

- *Type:* double

---

##### `PasswordMinUppercaseInput`<sup>Optional</sup> <a name="PasswordMinUppercaseInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput"></a>

```csharp
public double PasswordMinUppercaseInput { get; }
```

- *Type:* double

---

##### `PasswordShowLockoutFailuresInput`<sup>Optional</sup> <a name="PasswordShowLockoutFailuresInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput"></a>

```csharp
public object PasswordShowLockoutFailuresInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QuestionMinLengthInput`<sup>Optional</sup> <a name="QuestionMinLengthInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput"></a>

```csharp
public double QuestionMinLengthInput { get; }
```

- *Type:* double

---

##### `QuestionRecoveryInput`<sup>Optional</sup> <a name="QuestionRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput"></a>

```csharp
public string QuestionRecoveryInput { get; }
```

- *Type:* string

---

##### `RecoveryEmailTokenInput`<sup>Optional</sup> <a name="RecoveryEmailTokenInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput"></a>

```csharp
public double RecoveryEmailTokenInput { get; }
```

- *Type:* double

---

##### `SkipUnlockInput`<sup>Optional</sup> <a name="SkipUnlockInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput"></a>

```csharp
public object SkipUnlockInput { get; }
```

- *Type:* object

---

##### `SmsRecoveryInput`<sup>Optional</sup> <a name="SmsRecoveryInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput"></a>

```csharp
public string SmsRecoveryInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider"></a>

```csharp
public string AuthProvider { get; }
```

- *Type:* string

---

##### `CallRecovery`<sup>Required</sup> <a name="CallRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery"></a>

```csharp
public string CallRecovery { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailRecovery`<sup>Required</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery"></a>

```csharp
public string EmailRecovery { get; }
```

- *Type:* string

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PasswordAutoUnlockMinutes`<sup>Required</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes"></a>

```csharp
public double PasswordAutoUnlockMinutes { get; }
```

- *Type:* double

---

##### `PasswordDictionaryLookup`<sup>Required</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup"></a>

```csharp
public object PasswordDictionaryLookup { get; }
```

- *Type:* object

---

##### `PasswordExcludeFirstName`<sup>Required</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName"></a>

```csharp
public object PasswordExcludeFirstName { get; }
```

- *Type:* object

---

##### `PasswordExcludeLastName`<sup>Required</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName"></a>

```csharp
public object PasswordExcludeLastName { get; }
```

- *Type:* object

---

##### `PasswordExcludeUsername`<sup>Required</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername"></a>

```csharp
public object PasswordExcludeUsername { get; }
```

- *Type:* object

---

##### `PasswordExpireWarnDays`<sup>Required</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays"></a>

```csharp
public double PasswordExpireWarnDays { get; }
```

- *Type:* double

---

##### `PasswordHistoryCount`<sup>Required</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount"></a>

```csharp
public double PasswordHistoryCount { get; }
```

- *Type:* double

---

##### `PasswordLockoutNotificationChannels`<sup>Required</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels"></a>

```csharp
public string[] PasswordLockoutNotificationChannels { get; }
```

- *Type:* string[]

---

##### `PasswordMaxAgeDays`<sup>Required</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays"></a>

```csharp
public double PasswordMaxAgeDays { get; }
```

- *Type:* double

---

##### `PasswordMaxLockoutAttempts`<sup>Required</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts"></a>

```csharp
public double PasswordMaxLockoutAttempts { get; }
```

- *Type:* double

---

##### `PasswordMinAgeMinutes`<sup>Required</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes"></a>

```csharp
public double PasswordMinAgeMinutes { get; }
```

- *Type:* double

---

##### `PasswordMinLength`<sup>Required</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength"></a>

```csharp
public double PasswordMinLength { get; }
```

- *Type:* double

---

##### `PasswordMinLowercase`<sup>Required</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase"></a>

```csharp
public double PasswordMinLowercase { get; }
```

- *Type:* double

---

##### `PasswordMinNumber`<sup>Required</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber"></a>

```csharp
public double PasswordMinNumber { get; }
```

- *Type:* double

---

##### `PasswordMinSymbol`<sup>Required</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol"></a>

```csharp
public double PasswordMinSymbol { get; }
```

- *Type:* double

---

##### `PasswordMinUppercase`<sup>Required</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase"></a>

```csharp
public double PasswordMinUppercase { get; }
```

- *Type:* double

---

##### `PasswordShowLockoutFailures`<sup>Required</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures"></a>

```csharp
public object PasswordShowLockoutFailures { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `QuestionMinLength`<sup>Required</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength"></a>

```csharp
public double QuestionMinLength { get; }
```

- *Type:* double

---

##### `QuestionRecovery`<sup>Required</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery"></a>

```csharp
public string QuestionRecovery { get; }
```

- *Type:* string

---

##### `RecoveryEmailToken`<sup>Required</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken"></a>

```csharp
public double RecoveryEmailToken { get; }
```

- *Type:* double

---

##### `SkipUnlock`<sup>Required</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock"></a>

```csharp
public object SkipUnlock { get; }
```

- *Type:* object

---

##### `SmsRecovery`<sup>Required</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery"></a>

```csharp
public string SmsRecovery { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PasswordPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AuthProvider = null,
    string CallRecovery = null,
    string Description = null,
    string EmailRecovery = null,
    string[] GroupsIncluded = null,
    string Id = null,
    double PasswordAutoUnlockMinutes = null,
    object PasswordDictionaryLookup = null,
    object PasswordExcludeFirstName = null,
    object PasswordExcludeLastName = null,
    object PasswordExcludeUsername = null,
    double PasswordExpireWarnDays = null,
    double PasswordHistoryCount = null,
    string[] PasswordLockoutNotificationChannels = null,
    double PasswordMaxAgeDays = null,
    double PasswordMaxLockoutAttempts = null,
    double PasswordMinAgeMinutes = null,
    double PasswordMinLength = null,
    double PasswordMinLowercase = null,
    double PasswordMinNumber = null,
    double PasswordMinSymbol = null,
    double PasswordMinUppercase = null,
    object PasswordShowLockoutFailures = null,
    double Priority = null,
    double QuestionMinLength = null,
    string QuestionRecovery = null,
    double RecoveryEmailToken = null,
    object SkipUnlock = null,
    string SmsRecovery = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name">Name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider">AuthProvider</a></code> | <code>string</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery">CallRecovery</a></code> | <code>string</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description">Description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery">EmailRecovery</a></code> | <code>string</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>double</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>object</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>object</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>object</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>object</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>double</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>double</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>string[]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>double</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>double</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>double</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength">PasswordMinLength</a></code> | <code>double</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>double</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>double</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>double</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>double</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>object</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength">QuestionMinLength</a></code> | <code>double</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery">QuestionRecovery</a></code> | <code>string</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>double</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock">SkipUnlock</a></code> | <code>object</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery">SmsRecovery</a></code> | <code>string</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status">Status</a></code> | <code>string</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#name PasswordPolicy#name}

---

##### `AuthProvider`<sup>Optional</sup> <a name="AuthProvider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider"></a>

```csharp
public string AuthProvider { get; set; }
```

- *Type:* string

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#auth_provider PasswordPolicy#auth_provider}

---

##### `CallRecovery`<sup>Optional</sup> <a name="CallRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery"></a>

```csharp
public string CallRecovery { get; set; }
```

- *Type:* string

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#call_recovery PasswordPolicy#call_recovery}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#description PasswordPolicy#description}

---

##### `EmailRecovery`<sup>Optional</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery"></a>

```csharp
public string EmailRecovery { get; set; }
```

- *Type:* string

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#email_recovery PasswordPolicy#email_recovery}

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; set; }
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#groups_included PasswordPolicy#groups_included}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordAutoUnlockMinutes`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes"></a>

```csharp
public double PasswordAutoUnlockMinutes { get; set; }
```

- *Type:* double

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_auto_unlock_minutes PasswordPolicy#password_auto_unlock_minutes}

---

##### `PasswordDictionaryLookup`<sup>Optional</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup"></a>

```csharp
public object PasswordDictionaryLookup { get; set; }
```

- *Type:* object

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_dictionary_lookup PasswordPolicy#password_dictionary_lookup}

---

##### `PasswordExcludeFirstName`<sup>Optional</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName"></a>

```csharp
public object PasswordExcludeFirstName { get; set; }
```

- *Type:* object

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_first_name PasswordPolicy#password_exclude_first_name}

---

##### `PasswordExcludeLastName`<sup>Optional</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName"></a>

```csharp
public object PasswordExcludeLastName { get; set; }
```

- *Type:* object

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_last_name PasswordPolicy#password_exclude_last_name}

---

##### `PasswordExcludeUsername`<sup>Optional</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername"></a>

```csharp
public object PasswordExcludeUsername { get; set; }
```

- *Type:* object

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_username PasswordPolicy#password_exclude_username}

---

##### `PasswordExpireWarnDays`<sup>Optional</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays"></a>

```csharp
public double PasswordExpireWarnDays { get; set; }
```

- *Type:* double

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_expire_warn_days PasswordPolicy#password_expire_warn_days}

---

##### `PasswordHistoryCount`<sup>Optional</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount"></a>

```csharp
public double PasswordHistoryCount { get; set; }
```

- *Type:* double

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_history_count PasswordPolicy#password_history_count}

---

##### `PasswordLockoutNotificationChannels`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels"></a>

```csharp
public string[] PasswordLockoutNotificationChannels { get; set; }
```

- *Type:* string[]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_lockout_notification_channels PasswordPolicy#password_lockout_notification_channels}

---

##### `PasswordMaxAgeDays`<sup>Optional</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays"></a>

```csharp
public double PasswordMaxAgeDays { get; set; }
```

- *Type:* double

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_age_days PasswordPolicy#password_max_age_days}

---

##### `PasswordMaxLockoutAttempts`<sup>Optional</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts"></a>

```csharp
public double PasswordMaxLockoutAttempts { get; set; }
```

- *Type:* double

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_lockout_attempts PasswordPolicy#password_max_lockout_attempts}

---

##### `PasswordMinAgeMinutes`<sup>Optional</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes"></a>

```csharp
public double PasswordMinAgeMinutes { get; set; }
```

- *Type:* double

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_age_minutes PasswordPolicy#password_min_age_minutes}

---

##### `PasswordMinLength`<sup>Optional</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength"></a>

```csharp
public double PasswordMinLength { get; set; }
```

- *Type:* double

Minimum password length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_length PasswordPolicy#password_min_length}

---

##### `PasswordMinLowercase`<sup>Optional</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase"></a>

```csharp
public double PasswordMinLowercase { get; set; }
```

- *Type:* double

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_lowercase PasswordPolicy#password_min_lowercase}

---

##### `PasswordMinNumber`<sup>Optional</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber"></a>

```csharp
public double PasswordMinNumber { get; set; }
```

- *Type:* double

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_number PasswordPolicy#password_min_number}

---

##### `PasswordMinSymbol`<sup>Optional</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol"></a>

```csharp
public double PasswordMinSymbol { get; set; }
```

- *Type:* double

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_symbol PasswordPolicy#password_min_symbol}

---

##### `PasswordMinUppercase`<sup>Optional</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase"></a>

```csharp
public double PasswordMinUppercase { get; set; }
```

- *Type:* double

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_uppercase PasswordPolicy#password_min_uppercase}

---

##### `PasswordShowLockoutFailures`<sup>Optional</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures"></a>

```csharp
public object PasswordShowLockoutFailures { get; set; }
```

- *Type:* object

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_show_lockout_failures PasswordPolicy#password_show_lockout_failures}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#priority PasswordPolicy#priority}

---

##### `QuestionMinLength`<sup>Optional</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength"></a>

```csharp
public double QuestionMinLength { get; set; }
```

- *Type:* double

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_min_length PasswordPolicy#question_min_length}

---

##### `QuestionRecovery`<sup>Optional</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery"></a>

```csharp
public string QuestionRecovery { get; set; }
```

- *Type:* string

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_recovery PasswordPolicy#question_recovery}

---

##### `RecoveryEmailToken`<sup>Optional</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken"></a>

```csharp
public double RecoveryEmailToken { get; set; }
```

- *Type:* double

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#recovery_email_token PasswordPolicy#recovery_email_token}

---

##### `SkipUnlock`<sup>Optional</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock"></a>

```csharp
public object SkipUnlock { get; set; }
```

- *Type:* object

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#skip_unlock PasswordPolicy#skip_unlock}

---

##### `SmsRecovery`<sup>Optional</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery"></a>

```csharp
public string SmsRecovery { get; set; }
```

- *Type:* string

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#sms_recovery PasswordPolicy#sms_recovery}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#status PasswordPolicy#status}

---



