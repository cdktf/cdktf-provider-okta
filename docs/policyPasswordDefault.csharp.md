# `policyPasswordDefault` Submodule <a name="`policyPasswordDefault` Submodule" id="@cdktf/provider-okta.policyPasswordDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPasswordDefault <a name="PolicyPasswordDefault" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default okta_policy_password_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyPasswordDefault(Construct Scope, string Id, PolicyPasswordDefaultConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig">PolicyPasswordDefaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig">PolicyPasswordDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery">ResetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery">ResetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes">ResetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup">ResetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName">ResetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName">ResetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername">ResetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays">ResetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount">ResetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels">ResetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays">ResetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts">ResetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes">ResetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength">ResetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase">ResetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber">ResetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol">ResetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase">ResetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures">ResetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength">ResetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery">ResetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken">ResetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock">ResetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery">ResetSmsRecovery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCallRecovery` <a name="ResetCallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery"></a>

```csharp
private void ResetCallRecovery()
```

##### `ResetEmailRecovery` <a name="ResetEmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery"></a>

```csharp
private void ResetEmailRecovery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPasswordAutoUnlockMinutes` <a name="ResetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes"></a>

```csharp
private void ResetPasswordAutoUnlockMinutes()
```

##### `ResetPasswordDictionaryLookup` <a name="ResetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup"></a>

```csharp
private void ResetPasswordDictionaryLookup()
```

##### `ResetPasswordExcludeFirstName` <a name="ResetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName"></a>

```csharp
private void ResetPasswordExcludeFirstName()
```

##### `ResetPasswordExcludeLastName` <a name="ResetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName"></a>

```csharp
private void ResetPasswordExcludeLastName()
```

##### `ResetPasswordExcludeUsername` <a name="ResetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername"></a>

```csharp
private void ResetPasswordExcludeUsername()
```

##### `ResetPasswordExpireWarnDays` <a name="ResetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays"></a>

```csharp
private void ResetPasswordExpireWarnDays()
```

##### `ResetPasswordHistoryCount` <a name="ResetPasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount"></a>

```csharp
private void ResetPasswordHistoryCount()
```

##### `ResetPasswordLockoutNotificationChannels` <a name="ResetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels"></a>

```csharp
private void ResetPasswordLockoutNotificationChannels()
```

##### `ResetPasswordMaxAgeDays` <a name="ResetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays"></a>

```csharp
private void ResetPasswordMaxAgeDays()
```

##### `ResetPasswordMaxLockoutAttempts` <a name="ResetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts"></a>

```csharp
private void ResetPasswordMaxLockoutAttempts()
```

##### `ResetPasswordMinAgeMinutes` <a name="ResetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes"></a>

```csharp
private void ResetPasswordMinAgeMinutes()
```

##### `ResetPasswordMinLength` <a name="ResetPasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength"></a>

```csharp
private void ResetPasswordMinLength()
```

##### `ResetPasswordMinLowercase` <a name="ResetPasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase"></a>

```csharp
private void ResetPasswordMinLowercase()
```

##### `ResetPasswordMinNumber` <a name="ResetPasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber"></a>

```csharp
private void ResetPasswordMinNumber()
```

##### `ResetPasswordMinSymbol` <a name="ResetPasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol"></a>

```csharp
private void ResetPasswordMinSymbol()
```

##### `ResetPasswordMinUppercase` <a name="ResetPasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase"></a>

```csharp
private void ResetPasswordMinUppercase()
```

##### `ResetPasswordShowLockoutFailures` <a name="ResetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures"></a>

```csharp
private void ResetPasswordShowLockoutFailures()
```

##### `ResetQuestionMinLength` <a name="ResetQuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength"></a>

```csharp
private void ResetQuestionMinLength()
```

##### `ResetQuestionRecovery` <a name="ResetQuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery"></a>

```csharp
private void ResetQuestionRecovery()
```

##### `ResetRecoveryEmailToken` <a name="ResetRecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken"></a>

```csharp
private void ResetRecoveryEmailToken()
```

##### `ResetSkipUnlock` <a name="ResetSkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock"></a>

```csharp
private void ResetSkipUnlock()
```

##### `ResetSmsRecovery` <a name="ResetSmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery"></a>

```csharp
private void ResetSmsRecovery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyPasswordDefault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyPasswordDefault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyPasswordDefault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyPasswordDefault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyPasswordDefault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyPasswordDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPasswordDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider">DefaultAuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId">DefaultIncludedGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput">CallRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput">EmailRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput">PasswordAutoUnlockMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput">PasswordDictionaryLookupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput">PasswordExcludeFirstNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput">PasswordExcludeLastNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput">PasswordExcludeUsernameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput">PasswordExpireWarnDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput">PasswordHistoryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput">PasswordLockoutNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput">PasswordMaxAgeDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput">PasswordMaxLockoutAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput">PasswordMinAgeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput">PasswordMinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput">PasswordMinLowercaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput">PasswordMinNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput">PasswordMinSymbolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput">PasswordMinUppercaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput">PasswordShowLockoutFailuresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput">QuestionMinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput">QuestionRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput">RecoveryEmailTokenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput">SkipUnlockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput">SmsRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery">CallRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery">EmailRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength">PasswordMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength">QuestionMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery">QuestionRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock">SkipUnlock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery">SmsRecovery</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultAuthProvider`<sup>Required</sup> <a name="DefaultAuthProvider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider"></a>

```csharp
public string DefaultAuthProvider { get; }
```

- *Type:* string

---

##### `DefaultIncludedGroupId`<sup>Required</sup> <a name="DefaultIncludedGroupId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId"></a>

```csharp
public string DefaultIncludedGroupId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CallRecoveryInput`<sup>Optional</sup> <a name="CallRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput"></a>

```csharp
public string CallRecoveryInput { get; }
```

- *Type:* string

---

##### `EmailRecoveryInput`<sup>Optional</sup> <a name="EmailRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput"></a>

```csharp
public string EmailRecoveryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput"></a>

```csharp
public double PasswordAutoUnlockMinutesInput { get; }
```

- *Type:* double

---

##### `PasswordDictionaryLookupInput`<sup>Optional</sup> <a name="PasswordDictionaryLookupInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput"></a>

```csharp
public object PasswordDictionaryLookupInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeFirstNameInput`<sup>Optional</sup> <a name="PasswordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput"></a>

```csharp
public object PasswordExcludeFirstNameInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeLastNameInput`<sup>Optional</sup> <a name="PasswordExcludeLastNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput"></a>

```csharp
public object PasswordExcludeLastNameInput { get; }
```

- *Type:* object

---

##### `PasswordExcludeUsernameInput`<sup>Optional</sup> <a name="PasswordExcludeUsernameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput"></a>

```csharp
public object PasswordExcludeUsernameInput { get; }
```

- *Type:* object

---

##### `PasswordExpireWarnDaysInput`<sup>Optional</sup> <a name="PasswordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput"></a>

```csharp
public double PasswordExpireWarnDaysInput { get; }
```

- *Type:* double

---

##### `PasswordHistoryCountInput`<sup>Optional</sup> <a name="PasswordHistoryCountInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput"></a>

```csharp
public double PasswordHistoryCountInput { get; }
```

- *Type:* double

---

##### `PasswordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput"></a>

```csharp
public string[] PasswordLockoutNotificationChannelsInput { get; }
```

- *Type:* string[]

---

##### `PasswordMaxAgeDaysInput`<sup>Optional</sup> <a name="PasswordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput"></a>

```csharp
public double PasswordMaxAgeDaysInput { get; }
```

- *Type:* double

---

##### `PasswordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="PasswordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput"></a>

```csharp
public double PasswordMaxLockoutAttemptsInput { get; }
```

- *Type:* double

---

##### `PasswordMinAgeMinutesInput`<sup>Optional</sup> <a name="PasswordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput"></a>

```csharp
public double PasswordMinAgeMinutesInput { get; }
```

- *Type:* double

---

##### `PasswordMinLengthInput`<sup>Optional</sup> <a name="PasswordMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput"></a>

```csharp
public double PasswordMinLengthInput { get; }
```

- *Type:* double

---

##### `PasswordMinLowercaseInput`<sup>Optional</sup> <a name="PasswordMinLowercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput"></a>

```csharp
public double PasswordMinLowercaseInput { get; }
```

- *Type:* double

---

##### `PasswordMinNumberInput`<sup>Optional</sup> <a name="PasswordMinNumberInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput"></a>

```csharp
public double PasswordMinNumberInput { get; }
```

- *Type:* double

---

##### `PasswordMinSymbolInput`<sup>Optional</sup> <a name="PasswordMinSymbolInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput"></a>

```csharp
public double PasswordMinSymbolInput { get; }
```

- *Type:* double

---

##### `PasswordMinUppercaseInput`<sup>Optional</sup> <a name="PasswordMinUppercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput"></a>

```csharp
public double PasswordMinUppercaseInput { get; }
```

- *Type:* double

---

##### `PasswordShowLockoutFailuresInput`<sup>Optional</sup> <a name="PasswordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput"></a>

```csharp
public object PasswordShowLockoutFailuresInput { get; }
```

- *Type:* object

---

##### `QuestionMinLengthInput`<sup>Optional</sup> <a name="QuestionMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput"></a>

```csharp
public double QuestionMinLengthInput { get; }
```

- *Type:* double

---

##### `QuestionRecoveryInput`<sup>Optional</sup> <a name="QuestionRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput"></a>

```csharp
public string QuestionRecoveryInput { get; }
```

- *Type:* string

---

##### `RecoveryEmailTokenInput`<sup>Optional</sup> <a name="RecoveryEmailTokenInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput"></a>

```csharp
public double RecoveryEmailTokenInput { get; }
```

- *Type:* double

---

##### `SkipUnlockInput`<sup>Optional</sup> <a name="SkipUnlockInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput"></a>

```csharp
public object SkipUnlockInput { get; }
```

- *Type:* object

---

##### `SmsRecoveryInput`<sup>Optional</sup> <a name="SmsRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput"></a>

```csharp
public string SmsRecoveryInput { get; }
```

- *Type:* string

---

##### `CallRecovery`<sup>Required</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery"></a>

```csharp
public string CallRecovery { get; }
```

- *Type:* string

---

##### `EmailRecovery`<sup>Required</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery"></a>

```csharp
public string EmailRecovery { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PasswordAutoUnlockMinutes`<sup>Required</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes"></a>

```csharp
public double PasswordAutoUnlockMinutes { get; }
```

- *Type:* double

---

##### `PasswordDictionaryLookup`<sup>Required</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup"></a>

```csharp
public object PasswordDictionaryLookup { get; }
```

- *Type:* object

---

##### `PasswordExcludeFirstName`<sup>Required</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName"></a>

```csharp
public object PasswordExcludeFirstName { get; }
```

- *Type:* object

---

##### `PasswordExcludeLastName`<sup>Required</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName"></a>

```csharp
public object PasswordExcludeLastName { get; }
```

- *Type:* object

---

##### `PasswordExcludeUsername`<sup>Required</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername"></a>

```csharp
public object PasswordExcludeUsername { get; }
```

- *Type:* object

---

##### `PasswordExpireWarnDays`<sup>Required</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays"></a>

```csharp
public double PasswordExpireWarnDays { get; }
```

- *Type:* double

---

##### `PasswordHistoryCount`<sup>Required</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount"></a>

```csharp
public double PasswordHistoryCount { get; }
```

- *Type:* double

---

##### `PasswordLockoutNotificationChannels`<sup>Required</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels"></a>

```csharp
public string[] PasswordLockoutNotificationChannels { get; }
```

- *Type:* string[]

---

##### `PasswordMaxAgeDays`<sup>Required</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays"></a>

```csharp
public double PasswordMaxAgeDays { get; }
```

- *Type:* double

---

##### `PasswordMaxLockoutAttempts`<sup>Required</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts"></a>

```csharp
public double PasswordMaxLockoutAttempts { get; }
```

- *Type:* double

---

##### `PasswordMinAgeMinutes`<sup>Required</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes"></a>

```csharp
public double PasswordMinAgeMinutes { get; }
```

- *Type:* double

---

##### `PasswordMinLength`<sup>Required</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength"></a>

```csharp
public double PasswordMinLength { get; }
```

- *Type:* double

---

##### `PasswordMinLowercase`<sup>Required</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase"></a>

```csharp
public double PasswordMinLowercase { get; }
```

- *Type:* double

---

##### `PasswordMinNumber`<sup>Required</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber"></a>

```csharp
public double PasswordMinNumber { get; }
```

- *Type:* double

---

##### `PasswordMinSymbol`<sup>Required</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol"></a>

```csharp
public double PasswordMinSymbol { get; }
```

- *Type:* double

---

##### `PasswordMinUppercase`<sup>Required</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase"></a>

```csharp
public double PasswordMinUppercase { get; }
```

- *Type:* double

---

##### `PasswordShowLockoutFailures`<sup>Required</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures"></a>

```csharp
public object PasswordShowLockoutFailures { get; }
```

- *Type:* object

---

##### `QuestionMinLength`<sup>Required</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength"></a>

```csharp
public double QuestionMinLength { get; }
```

- *Type:* double

---

##### `QuestionRecovery`<sup>Required</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery"></a>

```csharp
public string QuestionRecovery { get; }
```

- *Type:* string

---

##### `RecoveryEmailToken`<sup>Required</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken"></a>

```csharp
public double RecoveryEmailToken { get; }
```

- *Type:* double

---

##### `SkipUnlock`<sup>Required</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock"></a>

```csharp
public object SkipUnlock { get; }
```

- *Type:* object

---

##### `SmsRecovery`<sup>Required</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery"></a>

```csharp
public string SmsRecovery { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordDefaultConfig <a name="PolicyPasswordDefaultConfig" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyPasswordDefaultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CallRecovery = null,
    string EmailRecovery = null,
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
    double QuestionMinLength = null,
    string QuestionRecovery = null,
    double RecoveryEmailToken = null,
    object SkipUnlock = null,
    string SmsRecovery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery">CallRecovery</a></code> | <code>string</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery">EmailRecovery</a></code> | <code>string</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>double</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>object</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>object</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>object</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>object</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>double</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>double</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>string[]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>double</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>double</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>double</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength">PasswordMinLength</a></code> | <code>double</code> | Minimum password length. Default is `8`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>double</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>double</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>double</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>double</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>object</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength">QuestionMinLength</a></code> | <code>double</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery">QuestionRecovery</a></code> | <code>string</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>double</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock">SkipUnlock</a></code> | <code>object</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery">SmsRecovery</a></code> | <code>string</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CallRecovery`<sup>Optional</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery"></a>

```csharp
public string CallRecovery { get; set; }
```

- *Type:* string

Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `EmailRecovery`<sup>Optional</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery"></a>

```csharp
public string EmailRecovery { get; set; }
```

- *Type:* string

Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordAutoUnlockMinutes`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes"></a>

```csharp
public double PasswordAutoUnlockMinutes { get; set; }
```

- *Type:* double

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `PasswordDictionaryLookup`<sup>Optional</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup"></a>

```csharp
public object PasswordDictionaryLookup { get; set; }
```

- *Type:* object

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `PasswordExcludeFirstName`<sup>Optional</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName"></a>

```csharp
public object PasswordExcludeFirstName { get; set; }
```

- *Type:* object

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `PasswordExcludeLastName`<sup>Optional</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName"></a>

```csharp
public object PasswordExcludeLastName { get; set; }
```

- *Type:* object

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `PasswordExcludeUsername`<sup>Optional</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername"></a>

```csharp
public object PasswordExcludeUsername { get; set; }
```

- *Type:* object

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `PasswordExpireWarnDays`<sup>Optional</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays"></a>

```csharp
public double PasswordExpireWarnDays { get; set; }
```

- *Type:* double

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `PasswordHistoryCount`<sup>Optional</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount"></a>

```csharp
public double PasswordHistoryCount { get; set; }
```

- *Type:* double

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `PasswordLockoutNotificationChannels`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels"></a>

```csharp
public string[] PasswordLockoutNotificationChannels { get; set; }
```

- *Type:* string[]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `PasswordMaxAgeDays`<sup>Optional</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays"></a>

```csharp
public double PasswordMaxAgeDays { get; set; }
```

- *Type:* double

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `PasswordMaxLockoutAttempts`<sup>Optional</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts"></a>

```csharp
public double PasswordMaxLockoutAttempts { get; set; }
```

- *Type:* double

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `PasswordMinAgeMinutes`<sup>Optional</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes"></a>

```csharp
public double PasswordMinAgeMinutes { get; set; }
```

- *Type:* double

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `PasswordMinLength`<sup>Optional</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength"></a>

```csharp
public double PasswordMinLength { get; set; }
```

- *Type:* double

Minimum password length. Default is `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `PasswordMinLowercase`<sup>Optional</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase"></a>

```csharp
public double PasswordMinLowercase { get; set; }
```

- *Type:* double

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `PasswordMinNumber`<sup>Optional</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber"></a>

```csharp
public double PasswordMinNumber { get; set; }
```

- *Type:* double

If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `PasswordMinSymbol`<sup>Optional</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol"></a>

```csharp
public double PasswordMinSymbol { get; set; }
```

- *Type:* double

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `PasswordMinUppercase`<sup>Optional</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase"></a>

```csharp
public double PasswordMinUppercase { get; set; }
```

- *Type:* double

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `PasswordShowLockoutFailures`<sup>Optional</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures"></a>

```csharp
public object PasswordShowLockoutFailures { get; set; }
```

- *Type:* object

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `QuestionMinLength`<sup>Optional</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength"></a>

```csharp
public double QuestionMinLength { get; set; }
```

- *Type:* double

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `QuestionRecovery`<sup>Optional</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery"></a>

```csharp
public string QuestionRecovery { get; set; }
```

- *Type:* string

Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `RecoveryEmailToken`<sup>Optional</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken"></a>

```csharp
public double RecoveryEmailToken { get; set; }
```

- *Type:* double

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `SkipUnlock`<sup>Optional</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock"></a>

```csharp
public object SkipUnlock { get; set; }
```

- *Type:* object

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `SmsRecovery`<sup>Optional</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery"></a>

```csharp
public string SmsRecovery { get; set; }
```

- *Type:* string

Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---



