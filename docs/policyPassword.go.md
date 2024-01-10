# `policyPassword` Submodule <a name="`policyPassword` Submodule" id="@cdktf/provider-okta.policyPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPassword <a name="PolicyPassword" id="@cdktf/provider-okta.policyPassword.PolicyPassword"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password okta_policy_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

policypassword.NewPolicyPassword(scope Construct, id *string, config PolicyPasswordConfig) PolicyPassword
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig">PolicyPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig">PolicyPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider">ResetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery">ResetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery">ResetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes">ResetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup">ResetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName">ResetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName">ResetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername">ResetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays">ResetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount">ResetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels">ResetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays">ResetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts">ResetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes">ResetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength">ResetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase">ResetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber">ResetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol">ResetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase">ResetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures">ResetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength">ResetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery">ResetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken">ResetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock">ResetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery">ResetSmsRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthProvider` <a name="ResetAuthProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider"></a>

```go
func ResetAuthProvider()
```

##### `ResetCallRecovery` <a name="ResetCallRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery"></a>

```go
func ResetCallRecovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailRecovery` <a name="ResetEmailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery"></a>

```go
func ResetEmailRecovery()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded"></a>

```go
func ResetGroupsIncluded()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetId"></a>

```go
func ResetId()
```

##### `ResetPasswordAutoUnlockMinutes` <a name="ResetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes"></a>

```go
func ResetPasswordAutoUnlockMinutes()
```

##### `ResetPasswordDictionaryLookup` <a name="ResetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup"></a>

```go
func ResetPasswordDictionaryLookup()
```

##### `ResetPasswordExcludeFirstName` <a name="ResetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName"></a>

```go
func ResetPasswordExcludeFirstName()
```

##### `ResetPasswordExcludeLastName` <a name="ResetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName"></a>

```go
func ResetPasswordExcludeLastName()
```

##### `ResetPasswordExcludeUsername` <a name="ResetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername"></a>

```go
func ResetPasswordExcludeUsername()
```

##### `ResetPasswordExpireWarnDays` <a name="ResetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays"></a>

```go
func ResetPasswordExpireWarnDays()
```

##### `ResetPasswordHistoryCount` <a name="ResetPasswordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount"></a>

```go
func ResetPasswordHistoryCount()
```

##### `ResetPasswordLockoutNotificationChannels` <a name="ResetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels"></a>

```go
func ResetPasswordLockoutNotificationChannels()
```

##### `ResetPasswordMaxAgeDays` <a name="ResetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays"></a>

```go
func ResetPasswordMaxAgeDays()
```

##### `ResetPasswordMaxLockoutAttempts` <a name="ResetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts"></a>

```go
func ResetPasswordMaxLockoutAttempts()
```

##### `ResetPasswordMinAgeMinutes` <a name="ResetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes"></a>

```go
func ResetPasswordMinAgeMinutes()
```

##### `ResetPasswordMinLength` <a name="ResetPasswordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength"></a>

```go
func ResetPasswordMinLength()
```

##### `ResetPasswordMinLowercase` <a name="ResetPasswordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase"></a>

```go
func ResetPasswordMinLowercase()
```

##### `ResetPasswordMinNumber` <a name="ResetPasswordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber"></a>

```go
func ResetPasswordMinNumber()
```

##### `ResetPasswordMinSymbol` <a name="ResetPasswordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol"></a>

```go
func ResetPasswordMinSymbol()
```

##### `ResetPasswordMinUppercase` <a name="ResetPasswordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase"></a>

```go
func ResetPasswordMinUppercase()
```

##### `ResetPasswordShowLockoutFailures` <a name="ResetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures"></a>

```go
func ResetPasswordShowLockoutFailures()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetQuestionMinLength` <a name="ResetQuestionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength"></a>

```go
func ResetQuestionMinLength()
```

##### `ResetQuestionRecovery` <a name="ResetQuestionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery"></a>

```go
func ResetQuestionRecovery()
```

##### `ResetRecoveryEmailToken` <a name="ResetRecoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken"></a>

```go
func ResetRecoveryEmailToken()
```

##### `ResetSkipUnlock` <a name="ResetSkipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock"></a>

```go
func ResetSkipUnlock()
```

##### `ResetSmsRecovery` <a name="ResetSmsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery"></a>

```go
func ResetSmsRecovery()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

policypassword.PolicyPassword_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

policypassword.PolicyPassword_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

policypassword.PolicyPassword_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

policypassword.PolicyPassword_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyPassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput">AuthProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput">CallRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput">EmailRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput">PasswordAutoUnlockMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput">PasswordDictionaryLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput">PasswordExcludeFirstNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput">PasswordExcludeLastNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput">PasswordExcludeUsernameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput">PasswordExpireWarnDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput">PasswordHistoryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput">PasswordLockoutNotificationChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput">PasswordMaxAgeDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput">PasswordMaxLockoutAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput">PasswordMinAgeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput">PasswordMinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput">PasswordMinLowercaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput">PasswordMinNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput">PasswordMinSymbolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput">PasswordMinUppercaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput">PasswordShowLockoutFailuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput">QuestionMinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput">QuestionRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput">RecoveryEmailTokenInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput">SkipUnlockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput">SmsRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider">AuthProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery">CallRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery">EmailRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength">PasswordMinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength">QuestionMinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery">QuestionRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock">SkipUnlock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery">SmsRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthProviderInput`<sup>Optional</sup> <a name="AuthProviderInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput"></a>

```go
func AuthProviderInput() *string
```

- *Type:* *string

---

##### `CallRecoveryInput`<sup>Optional</sup> <a name="CallRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput"></a>

```go
func CallRecoveryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailRecoveryInput`<sup>Optional</sup> <a name="EmailRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput"></a>

```go
func EmailRecoveryInput() *string
```

- *Type:* *string

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput"></a>

```go
func GroupsIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput"></a>

```go
func PasswordAutoUnlockMinutesInput() *f64
```

- *Type:* *f64

---

##### `PasswordDictionaryLookupInput`<sup>Optional</sup> <a name="PasswordDictionaryLookupInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput"></a>

```go
func PasswordDictionaryLookupInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeFirstNameInput`<sup>Optional</sup> <a name="PasswordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput"></a>

```go
func PasswordExcludeFirstNameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeLastNameInput`<sup>Optional</sup> <a name="PasswordExcludeLastNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput"></a>

```go
func PasswordExcludeLastNameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeUsernameInput`<sup>Optional</sup> <a name="PasswordExcludeUsernameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput"></a>

```go
func PasswordExcludeUsernameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpireWarnDaysInput`<sup>Optional</sup> <a name="PasswordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput"></a>

```go
func PasswordExpireWarnDaysInput() *f64
```

- *Type:* *f64

---

##### `PasswordHistoryCountInput`<sup>Optional</sup> <a name="PasswordHistoryCountInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput"></a>

```go
func PasswordHistoryCountInput() *f64
```

- *Type:* *f64

---

##### `PasswordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput"></a>

```go
func PasswordLockoutNotificationChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordMaxAgeDaysInput`<sup>Optional</sup> <a name="PasswordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput"></a>

```go
func PasswordMaxAgeDaysInput() *f64
```

- *Type:* *f64

---

##### `PasswordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="PasswordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput"></a>

```go
func PasswordMaxLockoutAttemptsInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinAgeMinutesInput`<sup>Optional</sup> <a name="PasswordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput"></a>

```go
func PasswordMinAgeMinutesInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinLengthInput`<sup>Optional</sup> <a name="PasswordMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput"></a>

```go
func PasswordMinLengthInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinLowercaseInput`<sup>Optional</sup> <a name="PasswordMinLowercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput"></a>

```go
func PasswordMinLowercaseInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinNumberInput`<sup>Optional</sup> <a name="PasswordMinNumberInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput"></a>

```go
func PasswordMinNumberInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinSymbolInput`<sup>Optional</sup> <a name="PasswordMinSymbolInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput"></a>

```go
func PasswordMinSymbolInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinUppercaseInput`<sup>Optional</sup> <a name="PasswordMinUppercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput"></a>

```go
func PasswordMinUppercaseInput() *f64
```

- *Type:* *f64

---

##### `PasswordShowLockoutFailuresInput`<sup>Optional</sup> <a name="PasswordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput"></a>

```go
func PasswordShowLockoutFailuresInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `QuestionMinLengthInput`<sup>Optional</sup> <a name="QuestionMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput"></a>

```go
func QuestionMinLengthInput() *f64
```

- *Type:* *f64

---

##### `QuestionRecoveryInput`<sup>Optional</sup> <a name="QuestionRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput"></a>

```go
func QuestionRecoveryInput() *string
```

- *Type:* *string

---

##### `RecoveryEmailTokenInput`<sup>Optional</sup> <a name="RecoveryEmailTokenInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput"></a>

```go
func RecoveryEmailTokenInput() *f64
```

- *Type:* *f64

---

##### `SkipUnlockInput`<sup>Optional</sup> <a name="SkipUnlockInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput"></a>

```go
func SkipUnlockInput() interface{}
```

- *Type:* interface{}

---

##### `SmsRecoveryInput`<sup>Optional</sup> <a name="SmsRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput"></a>

```go
func SmsRecoveryInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider"></a>

```go
func AuthProvider() *string
```

- *Type:* *string

---

##### `CallRecovery`<sup>Required</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery"></a>

```go
func CallRecovery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailRecovery`<sup>Required</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery"></a>

```go
func EmailRecovery() *string
```

- *Type:* *string

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded"></a>

```go
func GroupsIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PasswordAutoUnlockMinutes`<sup>Required</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes"></a>

```go
func PasswordAutoUnlockMinutes() *f64
```

- *Type:* *f64

---

##### `PasswordDictionaryLookup`<sup>Required</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup"></a>

```go
func PasswordDictionaryLookup() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeFirstName`<sup>Required</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName"></a>

```go
func PasswordExcludeFirstName() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeLastName`<sup>Required</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName"></a>

```go
func PasswordExcludeLastName() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeUsername`<sup>Required</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername"></a>

```go
func PasswordExcludeUsername() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpireWarnDays`<sup>Required</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays"></a>

```go
func PasswordExpireWarnDays() *f64
```

- *Type:* *f64

---

##### `PasswordHistoryCount`<sup>Required</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount"></a>

```go
func PasswordHistoryCount() *f64
```

- *Type:* *f64

---

##### `PasswordLockoutNotificationChannels`<sup>Required</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels"></a>

```go
func PasswordLockoutNotificationChannels() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordMaxAgeDays`<sup>Required</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays"></a>

```go
func PasswordMaxAgeDays() *f64
```

- *Type:* *f64

---

##### `PasswordMaxLockoutAttempts`<sup>Required</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts"></a>

```go
func PasswordMaxLockoutAttempts() *f64
```

- *Type:* *f64

---

##### `PasswordMinAgeMinutes`<sup>Required</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes"></a>

```go
func PasswordMinAgeMinutes() *f64
```

- *Type:* *f64

---

##### `PasswordMinLength`<sup>Required</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength"></a>

```go
func PasswordMinLength() *f64
```

- *Type:* *f64

---

##### `PasswordMinLowercase`<sup>Required</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase"></a>

```go
func PasswordMinLowercase() *f64
```

- *Type:* *f64

---

##### `PasswordMinNumber`<sup>Required</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber"></a>

```go
func PasswordMinNumber() *f64
```

- *Type:* *f64

---

##### `PasswordMinSymbol`<sup>Required</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol"></a>

```go
func PasswordMinSymbol() *f64
```

- *Type:* *f64

---

##### `PasswordMinUppercase`<sup>Required</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase"></a>

```go
func PasswordMinUppercase() *f64
```

- *Type:* *f64

---

##### `PasswordShowLockoutFailures`<sup>Required</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures"></a>

```go
func PasswordShowLockoutFailures() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `QuestionMinLength`<sup>Required</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength"></a>

```go
func QuestionMinLength() *f64
```

- *Type:* *f64

---

##### `QuestionRecovery`<sup>Required</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery"></a>

```go
func QuestionRecovery() *string
```

- *Type:* *string

---

##### `RecoveryEmailToken`<sup>Required</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken"></a>

```go
func RecoveryEmailToken() *f64
```

- *Type:* *f64

---

##### `SkipUnlock`<sup>Required</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock"></a>

```go
func SkipUnlock() interface{}
```

- *Type:* interface{}

---

##### `SmsRecovery`<sup>Required</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery"></a>

```go
func SmsRecovery() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordConfig <a name="PolicyPasswordConfig" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policypassword"

&policypassword.PolicyPasswordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AuthProvider: *string,
	CallRecovery: *string,
	Description: *string,
	EmailRecovery: *string,
	GroupsIncluded: *[]*string,
	Id: *string,
	PasswordAutoUnlockMinutes: *f64,
	PasswordDictionaryLookup: interface{},
	PasswordExcludeFirstName: interface{},
	PasswordExcludeLastName: interface{},
	PasswordExcludeUsername: interface{},
	PasswordExpireWarnDays: *f64,
	PasswordHistoryCount: *f64,
	PasswordLockoutNotificationChannels: *[]*string,
	PasswordMaxAgeDays: *f64,
	PasswordMaxLockoutAttempts: *f64,
	PasswordMinAgeMinutes: *f64,
	PasswordMinLength: *f64,
	PasswordMinLowercase: *f64,
	PasswordMinNumber: *f64,
	PasswordMinSymbol: *f64,
	PasswordMinUppercase: *f64,
	PasswordShowLockoutFailures: interface{},
	Priority: *f64,
	QuestionMinLength: *f64,
	QuestionRecovery: *string,
	RecoveryEmailToken: *f64,
	SkipUnlock: interface{},
	SmsRecovery: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name">Name</a></code> | <code>*string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider">AuthProvider</a></code> | <code>*string</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery">CallRecovery</a></code> | <code>*string</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description">Description</a></code> | <code>*string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery">EmailRecovery</a></code> | <code>*string</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>*f64</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>interface{}</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>interface{}</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>interface{}</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>interface{}</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>*f64</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>*f64</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>*[]*string</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>*f64</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>*f64</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>*f64</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength">PasswordMinLength</a></code> | <code>*f64</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>*f64</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>*f64</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>*f64</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>*f64</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>interface{}</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength">QuestionMinLength</a></code> | <code>*f64</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery">QuestionRecovery</a></code> | <code>*string</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>*f64</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock">SkipUnlock</a></code> | <code>interface{}</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery">SmsRecovery</a></code> | <code>*string</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status">Status</a></code> | <code>*string</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#name PolicyPassword#name}

---

##### `AuthProvider`<sup>Optional</sup> <a name="AuthProvider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider"></a>

```go
AuthProvider *string
```

- *Type:* *string

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `CallRecovery`<sup>Optional</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery"></a>

```go
CallRecovery *string
```

- *Type:* *string

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#description PolicyPassword#description}

---

##### `EmailRecovery`<sup>Optional</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery"></a>

```go
EmailRecovery *string
```

- *Type:* *string

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded"></a>

```go
GroupsIncluded *[]*string
```

- *Type:* *[]*string

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordAutoUnlockMinutes`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes"></a>

```go
PasswordAutoUnlockMinutes *f64
```

- *Type:* *f64

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `PasswordDictionaryLookup`<sup>Optional</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup"></a>

```go
PasswordDictionaryLookup interface{}
```

- *Type:* interface{}

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `PasswordExcludeFirstName`<sup>Optional</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName"></a>

```go
PasswordExcludeFirstName interface{}
```

- *Type:* interface{}

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `PasswordExcludeLastName`<sup>Optional</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName"></a>

```go
PasswordExcludeLastName interface{}
```

- *Type:* interface{}

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `PasswordExcludeUsername`<sup>Optional</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername"></a>

```go
PasswordExcludeUsername interface{}
```

- *Type:* interface{}

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `PasswordExpireWarnDays`<sup>Optional</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays"></a>

```go
PasswordExpireWarnDays *f64
```

- *Type:* *f64

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `PasswordHistoryCount`<sup>Optional</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount"></a>

```go
PasswordHistoryCount *f64
```

- *Type:* *f64

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `PasswordLockoutNotificationChannels`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels"></a>

```go
PasswordLockoutNotificationChannels *[]*string
```

- *Type:* *[]*string

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `PasswordMaxAgeDays`<sup>Optional</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays"></a>

```go
PasswordMaxAgeDays *f64
```

- *Type:* *f64

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `PasswordMaxLockoutAttempts`<sup>Optional</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts"></a>

```go
PasswordMaxLockoutAttempts *f64
```

- *Type:* *f64

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `PasswordMinAgeMinutes`<sup>Optional</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes"></a>

```go
PasswordMinAgeMinutes *f64
```

- *Type:* *f64

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `PasswordMinLength`<sup>Optional</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength"></a>

```go
PasswordMinLength *f64
```

- *Type:* *f64

Minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `PasswordMinLowercase`<sup>Optional</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase"></a>

```go
PasswordMinLowercase *f64
```

- *Type:* *f64

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `PasswordMinNumber`<sup>Optional</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber"></a>

```go
PasswordMinNumber *f64
```

- *Type:* *f64

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `PasswordMinSymbol`<sup>Optional</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol"></a>

```go
PasswordMinSymbol *f64
```

- *Type:* *f64

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `PasswordMinUppercase`<sup>Optional</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase"></a>

```go
PasswordMinUppercase *f64
```

- *Type:* *f64

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `PasswordShowLockoutFailures`<sup>Optional</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures"></a>

```go
PasswordShowLockoutFailures interface{}
```

- *Type:* interface{}

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `QuestionMinLength`<sup>Optional</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength"></a>

```go
QuestionMinLength *f64
```

- *Type:* *f64

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `QuestionRecovery`<sup>Optional</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery"></a>

```go
QuestionRecovery *string
```

- *Type:* *string

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `RecoveryEmailToken`<sup>Optional</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken"></a>

```go
RecoveryEmailToken *f64
```

- *Type:* *f64

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `SkipUnlock`<sup>Optional</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock"></a>

```go
SkipUnlock interface{}
```

- *Type:* interface{}

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `SmsRecovery`<sup>Optional</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery"></a>

```go
SmsRecovery *string
```

- *Type:* *string

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_password#status PolicyPassword#status}

---



