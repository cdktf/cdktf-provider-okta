# `policyPasswordDefault` Submodule <a name="`policyPasswordDefault` Submodule" id="@cdktf/provider-okta.policyPasswordDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPasswordDefault <a name="PolicyPasswordDefault" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default okta_policy_password_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

policypassworddefault.NewPolicyPasswordDefault(scope Construct, id *string, config PolicyPasswordDefaultConfig) PolicyPasswordDefault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig">PolicyPasswordDefaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCallRecovery` <a name="ResetCallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery"></a>

```go
func ResetCallRecovery()
```

##### `ResetEmailRecovery` <a name="ResetEmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery"></a>

```go
func ResetEmailRecovery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId"></a>

```go
func ResetId()
```

##### `ResetPasswordAutoUnlockMinutes` <a name="ResetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes"></a>

```go
func ResetPasswordAutoUnlockMinutes()
```

##### `ResetPasswordDictionaryLookup` <a name="ResetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup"></a>

```go
func ResetPasswordDictionaryLookup()
```

##### `ResetPasswordExcludeFirstName` <a name="ResetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName"></a>

```go
func ResetPasswordExcludeFirstName()
```

##### `ResetPasswordExcludeLastName` <a name="ResetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName"></a>

```go
func ResetPasswordExcludeLastName()
```

##### `ResetPasswordExcludeUsername` <a name="ResetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername"></a>

```go
func ResetPasswordExcludeUsername()
```

##### `ResetPasswordExpireWarnDays` <a name="ResetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays"></a>

```go
func ResetPasswordExpireWarnDays()
```

##### `ResetPasswordHistoryCount` <a name="ResetPasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount"></a>

```go
func ResetPasswordHistoryCount()
```

##### `ResetPasswordLockoutNotificationChannels` <a name="ResetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels"></a>

```go
func ResetPasswordLockoutNotificationChannels()
```

##### `ResetPasswordMaxAgeDays` <a name="ResetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays"></a>

```go
func ResetPasswordMaxAgeDays()
```

##### `ResetPasswordMaxLockoutAttempts` <a name="ResetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts"></a>

```go
func ResetPasswordMaxLockoutAttempts()
```

##### `ResetPasswordMinAgeMinutes` <a name="ResetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes"></a>

```go
func ResetPasswordMinAgeMinutes()
```

##### `ResetPasswordMinLength` <a name="ResetPasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength"></a>

```go
func ResetPasswordMinLength()
```

##### `ResetPasswordMinLowercase` <a name="ResetPasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase"></a>

```go
func ResetPasswordMinLowercase()
```

##### `ResetPasswordMinNumber` <a name="ResetPasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber"></a>

```go
func ResetPasswordMinNumber()
```

##### `ResetPasswordMinSymbol` <a name="ResetPasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol"></a>

```go
func ResetPasswordMinSymbol()
```

##### `ResetPasswordMinUppercase` <a name="ResetPasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase"></a>

```go
func ResetPasswordMinUppercase()
```

##### `ResetPasswordShowLockoutFailures` <a name="ResetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures"></a>

```go
func ResetPasswordShowLockoutFailures()
```

##### `ResetQuestionMinLength` <a name="ResetQuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength"></a>

```go
func ResetQuestionMinLength()
```

##### `ResetQuestionRecovery` <a name="ResetQuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery"></a>

```go
func ResetQuestionRecovery()
```

##### `ResetRecoveryEmailToken` <a name="ResetRecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken"></a>

```go
func ResetRecoveryEmailToken()
```

##### `ResetSkipUnlock` <a name="ResetSkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock"></a>

```go
func ResetSkipUnlock()
```

##### `ResetSmsRecovery` <a name="ResetSmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery"></a>

```go
func ResetSmsRecovery()
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

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

policypassworddefault.PolicyPasswordDefault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

policypassworddefault.PolicyPasswordDefault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

policypassworddefault.PolicyPasswordDefault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

policypassworddefault.PolicyPasswordDefault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyPasswordDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyPasswordDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPasswordDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider">DefaultAuthProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId">DefaultIncludedGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput">CallRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput">EmailRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput">PasswordAutoUnlockMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput">PasswordDictionaryLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput">PasswordExcludeFirstNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput">PasswordExcludeLastNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput">PasswordExcludeUsernameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput">PasswordExpireWarnDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput">PasswordHistoryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput">PasswordLockoutNotificationChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput">PasswordMaxAgeDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput">PasswordMaxLockoutAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput">PasswordMinAgeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput">PasswordMinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput">PasswordMinLowercaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput">PasswordMinNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput">PasswordMinSymbolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput">PasswordMinUppercaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput">PasswordShowLockoutFailuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput">QuestionMinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput">QuestionRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput">RecoveryEmailTokenInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput">SkipUnlockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput">SmsRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery">CallRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery">EmailRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength">PasswordMinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength">QuestionMinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery">QuestionRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock">SkipUnlock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery">SmsRecovery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAuthProvider`<sup>Required</sup> <a name="DefaultAuthProvider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider"></a>

```go
func DefaultAuthProvider() *string
```

- *Type:* *string

---

##### `DefaultIncludedGroupId`<sup>Required</sup> <a name="DefaultIncludedGroupId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId"></a>

```go
func DefaultIncludedGroupId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CallRecoveryInput`<sup>Optional</sup> <a name="CallRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput"></a>

```go
func CallRecoveryInput() *string
```

- *Type:* *string

---

##### `EmailRecoveryInput`<sup>Optional</sup> <a name="EmailRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput"></a>

```go
func EmailRecoveryInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput"></a>

```go
func PasswordAutoUnlockMinutesInput() *f64
```

- *Type:* *f64

---

##### `PasswordDictionaryLookupInput`<sup>Optional</sup> <a name="PasswordDictionaryLookupInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput"></a>

```go
func PasswordDictionaryLookupInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeFirstNameInput`<sup>Optional</sup> <a name="PasswordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput"></a>

```go
func PasswordExcludeFirstNameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeLastNameInput`<sup>Optional</sup> <a name="PasswordExcludeLastNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput"></a>

```go
func PasswordExcludeLastNameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeUsernameInput`<sup>Optional</sup> <a name="PasswordExcludeUsernameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput"></a>

```go
func PasswordExcludeUsernameInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpireWarnDaysInput`<sup>Optional</sup> <a name="PasswordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput"></a>

```go
func PasswordExpireWarnDaysInput() *f64
```

- *Type:* *f64

---

##### `PasswordHistoryCountInput`<sup>Optional</sup> <a name="PasswordHistoryCountInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput"></a>

```go
func PasswordHistoryCountInput() *f64
```

- *Type:* *f64

---

##### `PasswordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput"></a>

```go
func PasswordLockoutNotificationChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordMaxAgeDaysInput`<sup>Optional</sup> <a name="PasswordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput"></a>

```go
func PasswordMaxAgeDaysInput() *f64
```

- *Type:* *f64

---

##### `PasswordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="PasswordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput"></a>

```go
func PasswordMaxLockoutAttemptsInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinAgeMinutesInput`<sup>Optional</sup> <a name="PasswordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput"></a>

```go
func PasswordMinAgeMinutesInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinLengthInput`<sup>Optional</sup> <a name="PasswordMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput"></a>

```go
func PasswordMinLengthInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinLowercaseInput`<sup>Optional</sup> <a name="PasswordMinLowercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput"></a>

```go
func PasswordMinLowercaseInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinNumberInput`<sup>Optional</sup> <a name="PasswordMinNumberInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput"></a>

```go
func PasswordMinNumberInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinSymbolInput`<sup>Optional</sup> <a name="PasswordMinSymbolInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput"></a>

```go
func PasswordMinSymbolInput() *f64
```

- *Type:* *f64

---

##### `PasswordMinUppercaseInput`<sup>Optional</sup> <a name="PasswordMinUppercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput"></a>

```go
func PasswordMinUppercaseInput() *f64
```

- *Type:* *f64

---

##### `PasswordShowLockoutFailuresInput`<sup>Optional</sup> <a name="PasswordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput"></a>

```go
func PasswordShowLockoutFailuresInput() interface{}
```

- *Type:* interface{}

---

##### `QuestionMinLengthInput`<sup>Optional</sup> <a name="QuestionMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput"></a>

```go
func QuestionMinLengthInput() *f64
```

- *Type:* *f64

---

##### `QuestionRecoveryInput`<sup>Optional</sup> <a name="QuestionRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput"></a>

```go
func QuestionRecoveryInput() *string
```

- *Type:* *string

---

##### `RecoveryEmailTokenInput`<sup>Optional</sup> <a name="RecoveryEmailTokenInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput"></a>

```go
func RecoveryEmailTokenInput() *f64
```

- *Type:* *f64

---

##### `SkipUnlockInput`<sup>Optional</sup> <a name="SkipUnlockInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput"></a>

```go
func SkipUnlockInput() interface{}
```

- *Type:* interface{}

---

##### `SmsRecoveryInput`<sup>Optional</sup> <a name="SmsRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput"></a>

```go
func SmsRecoveryInput() *string
```

- *Type:* *string

---

##### `CallRecovery`<sup>Required</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery"></a>

```go
func CallRecovery() *string
```

- *Type:* *string

---

##### `EmailRecovery`<sup>Required</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery"></a>

```go
func EmailRecovery() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PasswordAutoUnlockMinutes`<sup>Required</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes"></a>

```go
func PasswordAutoUnlockMinutes() *f64
```

- *Type:* *f64

---

##### `PasswordDictionaryLookup`<sup>Required</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup"></a>

```go
func PasswordDictionaryLookup() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeFirstName`<sup>Required</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName"></a>

```go
func PasswordExcludeFirstName() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeLastName`<sup>Required</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName"></a>

```go
func PasswordExcludeLastName() interface{}
```

- *Type:* interface{}

---

##### `PasswordExcludeUsername`<sup>Required</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername"></a>

```go
func PasswordExcludeUsername() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpireWarnDays`<sup>Required</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays"></a>

```go
func PasswordExpireWarnDays() *f64
```

- *Type:* *f64

---

##### `PasswordHistoryCount`<sup>Required</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount"></a>

```go
func PasswordHistoryCount() *f64
```

- *Type:* *f64

---

##### `PasswordLockoutNotificationChannels`<sup>Required</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels"></a>

```go
func PasswordLockoutNotificationChannels() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordMaxAgeDays`<sup>Required</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays"></a>

```go
func PasswordMaxAgeDays() *f64
```

- *Type:* *f64

---

##### `PasswordMaxLockoutAttempts`<sup>Required</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts"></a>

```go
func PasswordMaxLockoutAttempts() *f64
```

- *Type:* *f64

---

##### `PasswordMinAgeMinutes`<sup>Required</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes"></a>

```go
func PasswordMinAgeMinutes() *f64
```

- *Type:* *f64

---

##### `PasswordMinLength`<sup>Required</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength"></a>

```go
func PasswordMinLength() *f64
```

- *Type:* *f64

---

##### `PasswordMinLowercase`<sup>Required</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase"></a>

```go
func PasswordMinLowercase() *f64
```

- *Type:* *f64

---

##### `PasswordMinNumber`<sup>Required</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber"></a>

```go
func PasswordMinNumber() *f64
```

- *Type:* *f64

---

##### `PasswordMinSymbol`<sup>Required</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol"></a>

```go
func PasswordMinSymbol() *f64
```

- *Type:* *f64

---

##### `PasswordMinUppercase`<sup>Required</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase"></a>

```go
func PasswordMinUppercase() *f64
```

- *Type:* *f64

---

##### `PasswordShowLockoutFailures`<sup>Required</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures"></a>

```go
func PasswordShowLockoutFailures() interface{}
```

- *Type:* interface{}

---

##### `QuestionMinLength`<sup>Required</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength"></a>

```go
func QuestionMinLength() *f64
```

- *Type:* *f64

---

##### `QuestionRecovery`<sup>Required</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery"></a>

```go
func QuestionRecovery() *string
```

- *Type:* *string

---

##### `RecoveryEmailToken`<sup>Required</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken"></a>

```go
func RecoveryEmailToken() *f64
```

- *Type:* *f64

---

##### `SkipUnlock`<sup>Required</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock"></a>

```go
func SkipUnlock() interface{}
```

- *Type:* interface{}

---

##### `SmsRecovery`<sup>Required</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery"></a>

```go
func SmsRecovery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordDefaultConfig <a name="PolicyPasswordDefaultConfig" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policypassworddefault"

&policypassworddefault.PolicyPasswordDefaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CallRecovery: *string,
	EmailRecovery: *string,
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
	QuestionMinLength: *f64,
	QuestionRecovery: *string,
	RecoveryEmailToken: *f64,
	SkipUnlock: interface{},
	SmsRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery">CallRecovery</a></code> | <code>*string</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery">EmailRecovery</a></code> | <code>*string</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes">PasswordAutoUnlockMinutes</a></code> | <code>*f64</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup">PasswordDictionaryLookup</a></code> | <code>interface{}</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName">PasswordExcludeFirstName</a></code> | <code>interface{}</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName">PasswordExcludeLastName</a></code> | <code>interface{}</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername">PasswordExcludeUsername</a></code> | <code>interface{}</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays">PasswordExpireWarnDays</a></code> | <code>*f64</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount">PasswordHistoryCount</a></code> | <code>*f64</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels">PasswordLockoutNotificationChannels</a></code> | <code>*[]*string</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>*f64</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts">PasswordMaxLockoutAttempts</a></code> | <code>*f64</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes">PasswordMinAgeMinutes</a></code> | <code>*f64</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength">PasswordMinLength</a></code> | <code>*f64</code> | Minimum password length. Default is `8`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase">PasswordMinLowercase</a></code> | <code>*f64</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber">PasswordMinNumber</a></code> | <code>*f64</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol">PasswordMinSymbol</a></code> | <code>*f64</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase">PasswordMinUppercase</a></code> | <code>*f64</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures">PasswordShowLockoutFailures</a></code> | <code>interface{}</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength">QuestionMinLength</a></code> | <code>*f64</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery">QuestionRecovery</a></code> | <code>*string</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken">RecoveryEmailToken</a></code> | <code>*f64</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock">SkipUnlock</a></code> | <code>interface{}</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery">SmsRecovery</a></code> | <code>*string</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CallRecovery`<sup>Optional</sup> <a name="CallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery"></a>

```go
CallRecovery *string
```

- *Type:* *string

Enable or disable voice call recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `EmailRecovery`<sup>Optional</sup> <a name="EmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery"></a>

```go
EmailRecovery *string
```

- *Type:* *string

Enable or disable email password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordAutoUnlockMinutes`<sup>Optional</sup> <a name="PasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes"></a>

```go
PasswordAutoUnlockMinutes *f64
```

- *Type:* *f64

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `PasswordDictionaryLookup`<sup>Optional</sup> <a name="PasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup"></a>

```go
PasswordDictionaryLookup interface{}
```

- *Type:* interface{}

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `PasswordExcludeFirstName`<sup>Optional</sup> <a name="PasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName"></a>

```go
PasswordExcludeFirstName interface{}
```

- *Type:* interface{}

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `PasswordExcludeLastName`<sup>Optional</sup> <a name="PasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName"></a>

```go
PasswordExcludeLastName interface{}
```

- *Type:* interface{}

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `PasswordExcludeUsername`<sup>Optional</sup> <a name="PasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername"></a>

```go
PasswordExcludeUsername interface{}
```

- *Type:* interface{}

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `PasswordExpireWarnDays`<sup>Optional</sup> <a name="PasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays"></a>

```go
PasswordExpireWarnDays *f64
```

- *Type:* *f64

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `PasswordHistoryCount`<sup>Optional</sup> <a name="PasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount"></a>

```go
PasswordHistoryCount *f64
```

- *Type:* *f64

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `PasswordLockoutNotificationChannels`<sup>Optional</sup> <a name="PasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels"></a>

```go
PasswordLockoutNotificationChannels *[]*string
```

- *Type:* *[]*string

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `PasswordMaxAgeDays`<sup>Optional</sup> <a name="PasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays"></a>

```go
PasswordMaxAgeDays *f64
```

- *Type:* *f64

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `PasswordMaxLockoutAttempts`<sup>Optional</sup> <a name="PasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts"></a>

```go
PasswordMaxLockoutAttempts *f64
```

- *Type:* *f64

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `PasswordMinAgeMinutes`<sup>Optional</sup> <a name="PasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes"></a>

```go
PasswordMinAgeMinutes *f64
```

- *Type:* *f64

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `PasswordMinLength`<sup>Optional</sup> <a name="PasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength"></a>

```go
PasswordMinLength *f64
```

- *Type:* *f64

Minimum password length. Default is `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `PasswordMinLowercase`<sup>Optional</sup> <a name="PasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase"></a>

```go
PasswordMinLowercase *f64
```

- *Type:* *f64

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `PasswordMinNumber`<sup>Optional</sup> <a name="PasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber"></a>

```go
PasswordMinNumber *f64
```

- *Type:* *f64

If a password must contain at least one number: 0 = no, 1 = yes. Default = `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `PasswordMinSymbol`<sup>Optional</sup> <a name="PasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol"></a>

```go
PasswordMinSymbol *f64
```

- *Type:* *f64

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `PasswordMinUppercase`<sup>Optional</sup> <a name="PasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase"></a>

```go
PasswordMinUppercase *f64
```

- *Type:* *f64

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `PasswordShowLockoutFailures`<sup>Optional</sup> <a name="PasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures"></a>

```go
PasswordShowLockoutFailures interface{}
```

- *Type:* interface{}

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `QuestionMinLength`<sup>Optional</sup> <a name="QuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength"></a>

```go
QuestionMinLength *f64
```

- *Type:* *f64

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `QuestionRecovery`<sup>Optional</sup> <a name="QuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery"></a>

```go
QuestionRecovery *string
```

- *Type:* *string

Enable or disable security question password recovery: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `RecoveryEmailToken`<sup>Optional</sup> <a name="RecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken"></a>

```go
RecoveryEmailToken *f64
```

- *Type:* *f64

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `SkipUnlock`<sup>Optional</sup> <a name="SkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock"></a>

```go
SkipUnlock interface{}
```

- *Type:* interface{}

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `SmsRecovery`<sup>Optional</sup> <a name="SmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery"></a>

```go
SmsRecovery *string
```

- *Type:* *string

Enable or disable SMS password recovery: ACTIVE or INACTIVE. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---



