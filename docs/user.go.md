# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-okta.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-okta.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.User.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.NewUser(scope Construct, id *string, config UserConfig) User
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.user.User.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-okta.user.User.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.user.User.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.user.User.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.user.User.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.user.User.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.user.User.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.user.User.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.user.User.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.user.User.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.user.User.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.user.User.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutPasswordHash` <a name="PutPasswordHash" id="@cdktf/provider-okta.user.User.putPasswordHash"></a>

```go
func PutPasswordHash(value UserPasswordHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-okta.user.User.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCostCenter` <a name="ResetCostCenter" id="@cdktf/provider-okta.user.User.resetCostCenter"></a>

```go
func ResetCostCenter()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-okta.user.User.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetCustomProfileAttributes` <a name="ResetCustomProfileAttributes" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributes"></a>

```go
func ResetCustomProfileAttributes()
```

##### `ResetCustomProfileAttributesToIgnore` <a name="ResetCustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore"></a>

```go
func ResetCustomProfileAttributesToIgnore()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-okta.user.User.resetDepartment"></a>

```go
func ResetDepartment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-okta.user.User.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-okta.user.User.resetDivision"></a>

```go
func ResetDivision()
```

##### `ResetEmployeeNumber` <a name="ResetEmployeeNumber" id="@cdktf/provider-okta.user.User.resetEmployeeNumber"></a>

```go
func ResetEmployeeNumber()
```

##### `ResetExpirePasswordOnCreate` <a name="ResetExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate"></a>

```go
func ResetExpirePasswordOnCreate()
```

##### `ResetHonorificPrefix` <a name="ResetHonorificPrefix" id="@cdktf/provider-okta.user.User.resetHonorificPrefix"></a>

```go
func ResetHonorificPrefix()
```

##### `ResetHonorificSuffix` <a name="ResetHonorificSuffix" id="@cdktf/provider-okta.user.User.resetHonorificSuffix"></a>

```go
func ResetHonorificSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.user.User.resetId"></a>

```go
func ResetId()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-okta.user.User.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetManager` <a name="ResetManager" id="@cdktf/provider-okta.user.User.resetManager"></a>

```go
func ResetManager()
```

##### `ResetManagerId` <a name="ResetManagerId" id="@cdktf/provider-okta.user.User.resetManagerId"></a>

```go
func ResetManagerId()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktf/provider-okta.user.User.resetMiddleName"></a>

```go
func ResetMiddleName()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-okta.user.User.resetMobilePhone"></a>

```go
func ResetMobilePhone()
```

##### `ResetNickName` <a name="ResetNickName" id="@cdktf/provider-okta.user.User.resetNickName"></a>

```go
func ResetNickName()
```

##### `ResetOldPassword` <a name="ResetOldPassword" id="@cdktf/provider-okta.user.User.resetOldPassword"></a>

```go
func ResetOldPassword()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-okta.user.User.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.user.User.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordHash` <a name="ResetPasswordHash" id="@cdktf/provider-okta.user.User.resetPasswordHash"></a>

```go
func ResetPasswordHash()
```

##### `ResetPasswordInlineHook` <a name="ResetPasswordInlineHook" id="@cdktf/provider-okta.user.User.resetPasswordInlineHook"></a>

```go
func ResetPasswordInlineHook()
```

##### `ResetPostalAddress` <a name="ResetPostalAddress" id="@cdktf/provider-okta.user.User.resetPostalAddress"></a>

```go
func ResetPostalAddress()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktf/provider-okta.user.User.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetPrimaryPhone` <a name="ResetPrimaryPhone" id="@cdktf/provider-okta.user.User.resetPrimaryPhone"></a>

```go
func ResetPrimaryPhone()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="@cdktf/provider-okta.user.User.resetProfileUrl"></a>

```go
func ResetProfileUrl()
```

##### `ResetRecoveryAnswer` <a name="ResetRecoveryAnswer" id="@cdktf/provider-okta.user.User.resetRecoveryAnswer"></a>

```go
func ResetRecoveryAnswer()
```

##### `ResetRecoveryQuestion` <a name="ResetRecoveryQuestion" id="@cdktf/provider-okta.user.User.resetRecoveryQuestion"></a>

```go
func ResetRecoveryQuestion()
```

##### `ResetSecondEmail` <a name="ResetSecondEmail" id="@cdktf/provider-okta.user.User.resetSecondEmail"></a>

```go
func ResetSecondEmail()
```

##### `ResetSkipRoles` <a name="ResetSkipRoles" id="@cdktf/provider-okta.user.User.resetSkipRoles"></a>

```go
func ResetSkipRoles()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-okta.user.User.resetState"></a>

```go
func ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.user.User.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-okta.user.User.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-okta.user.User.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-okta.user.User.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.user.User.resetUserType"></a>

```go
func ResetUserType()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-okta.user.User.resetZipCode"></a>

```go
func ResetZipCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.user.User.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.User_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.user.User.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.User_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.user.User.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.User_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.user.User.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.User_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.user.User.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHash">PasswordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.rawStatus">RawStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenterInput">CostCenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesInput">CustomProfileAttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput">CustomProfileAttributesToIgnoreInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.departmentInput">DepartmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.divisionInput">DivisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumberInput">EmployeeNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput">ExpirePasswordOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefixInput">HonorificPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffixInput">HonorificSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerIdInput">ManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerInput">ManagerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleNameInput">MiddleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickNameInput">NickNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPasswordInput">OldPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHashInput">PasswordHashInput</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHookInput">PasswordInlineHookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddressInput">PostalAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhoneInput">PrimaryPhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrlInput">ProfileUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswerInput">RecoveryAnswerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestionInput">RecoveryQuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmailInput">SecondEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRolesInput">SkipRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCodeInput">ZipCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenter">CostCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore">CustomProfileAttributesToIgnore</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.division">Division</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreate">ExpirePasswordOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.manager">Manager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerId">ManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickName">NickName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPassword">OldPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHook">PasswordInlineHook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddress">PostalAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhone">PrimaryPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswer">RecoveryAnswer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestion">RecoveryQuestion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmail">SecondEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRoles">SkipRoles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.user.User.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.user.User.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.user.User.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.user.User.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.user.User.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.user.User.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.user.User.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.user.User.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.user.User.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.user.User.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.user.User.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.user.User.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.user.User.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PasswordHash`<sup>Required</sup> <a name="PasswordHash" id="@cdktf/provider-okta.user.User.property.passwordHash"></a>

```go
func PasswordHash() UserPasswordHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a>

---

##### `RawStatus`<sup>Required</sup> <a name="RawStatus" id="@cdktf/provider-okta.user.User.property.rawStatus"></a>

```go
func RawStatus() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-okta.user.User.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CostCenterInput`<sup>Optional</sup> <a name="CostCenterInput" id="@cdktf/provider-okta.user.User.property.costCenterInput"></a>

```go
func CostCenterInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-okta.user.User.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `CustomProfileAttributesInput`<sup>Optional</sup> <a name="CustomProfileAttributesInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesInput"></a>

```go
func CustomProfileAttributesInput() *string
```

- *Type:* *string

---

##### `CustomProfileAttributesToIgnoreInput`<sup>Optional</sup> <a name="CustomProfileAttributesToIgnoreInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput"></a>

```go
func CustomProfileAttributesToIgnoreInput() *[]*string
```

- *Type:* *[]*string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-okta.user.User.property.departmentInput"></a>

```go
func DepartmentInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-okta.user.User.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-okta.user.User.property.divisionInput"></a>

```go
func DivisionInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-okta.user.User.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `EmployeeNumberInput`<sup>Optional</sup> <a name="EmployeeNumberInput" id="@cdktf/provider-okta.user.User.property.employeeNumberInput"></a>

```go
func EmployeeNumberInput() *string
```

- *Type:* *string

---

##### `ExpirePasswordOnCreateInput`<sup>Optional</sup> <a name="ExpirePasswordOnCreateInput" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput"></a>

```go
func ExpirePasswordOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-okta.user.User.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `HonorificPrefixInput`<sup>Optional</sup> <a name="HonorificPrefixInput" id="@cdktf/provider-okta.user.User.property.honorificPrefixInput"></a>

```go
func HonorificPrefixInput() *string
```

- *Type:* *string

---

##### `HonorificSuffixInput`<sup>Optional</sup> <a name="HonorificSuffixInput" id="@cdktf/provider-okta.user.User.property.honorificSuffixInput"></a>

```go
func HonorificSuffixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.user.User.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-okta.user.User.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-okta.user.User.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-okta.user.User.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ManagerIdInput`<sup>Optional</sup> <a name="ManagerIdInput" id="@cdktf/provider-okta.user.User.property.managerIdInput"></a>

```go
func ManagerIdInput() *string
```

- *Type:* *string

---

##### `ManagerInput`<sup>Optional</sup> <a name="ManagerInput" id="@cdktf/provider-okta.user.User.property.managerInput"></a>

```go
func ManagerInput() *string
```

- *Type:* *string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktf/provider-okta.user.User.property.middleNameInput"></a>

```go
func MiddleNameInput() *string
```

- *Type:* *string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-okta.user.User.property.mobilePhoneInput"></a>

```go
func MobilePhoneInput() *string
```

- *Type:* *string

---

##### `NickNameInput`<sup>Optional</sup> <a name="NickNameInput" id="@cdktf/provider-okta.user.User.property.nickNameInput"></a>

```go
func NickNameInput() *string
```

- *Type:* *string

---

##### `OldPasswordInput`<sup>Optional</sup> <a name="OldPasswordInput" id="@cdktf/provider-okta.user.User.property.oldPasswordInput"></a>

```go
func OldPasswordInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-okta.user.User.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PasswordHashInput`<sup>Optional</sup> <a name="PasswordHashInput" id="@cdktf/provider-okta.user.User.property.passwordHashInput"></a>

```go
func PasswordHashInput() UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `PasswordInlineHookInput`<sup>Optional</sup> <a name="PasswordInlineHookInput" id="@cdktf/provider-okta.user.User.property.passwordInlineHookInput"></a>

```go
func PasswordInlineHookInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.user.User.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-okta.user.User.property.postalAddressInput"></a>

```go
func PostalAddressInput() *string
```

- *Type:* *string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktf/provider-okta.user.User.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `PrimaryPhoneInput`<sup>Optional</sup> <a name="PrimaryPhoneInput" id="@cdktf/provider-okta.user.User.property.primaryPhoneInput"></a>

```go
func PrimaryPhoneInput() *string
```

- *Type:* *string

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="@cdktf/provider-okta.user.User.property.profileUrlInput"></a>

```go
func ProfileUrlInput() *string
```

- *Type:* *string

---

##### `RecoveryAnswerInput`<sup>Optional</sup> <a name="RecoveryAnswerInput" id="@cdktf/provider-okta.user.User.property.recoveryAnswerInput"></a>

```go
func RecoveryAnswerInput() *string
```

- *Type:* *string

---

##### `RecoveryQuestionInput`<sup>Optional</sup> <a name="RecoveryQuestionInput" id="@cdktf/provider-okta.user.User.property.recoveryQuestionInput"></a>

```go
func RecoveryQuestionInput() *string
```

- *Type:* *string

---

##### `SecondEmailInput`<sup>Optional</sup> <a name="SecondEmailInput" id="@cdktf/provider-okta.user.User.property.secondEmailInput"></a>

```go
func SecondEmailInput() *string
```

- *Type:* *string

---

##### `SkipRolesInput`<sup>Optional</sup> <a name="SkipRolesInput" id="@cdktf/provider-okta.user.User.property.skipRolesInput"></a>

```go
func SkipRolesInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-okta.user.User.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.user.User.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-okta.user.User.property.streetAddressInput"></a>

```go
func StreetAddressInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-okta.user.User.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.user.User.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.user.User.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-okta.user.User.property.zipCodeInput"></a>

```go
func ZipCodeInput() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.user.User.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-okta.user.User.property.costCenter"></a>

```go
func CostCenter() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-okta.user.User.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `CustomProfileAttributes`<sup>Required</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.user.User.property.customProfileAttributes"></a>

```go
func CustomProfileAttributes() *string
```

- *Type:* *string

---

##### `CustomProfileAttributesToIgnore`<sup>Required</sup> <a name="CustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore"></a>

```go
func CustomProfileAttributesToIgnore() *[]*string
```

- *Type:* *[]*string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-okta.user.User.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.user.User.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-okta.user.User.property.division"></a>

```go
func Division() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.user.User.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.user.User.property.employeeNumber"></a>

```go
func EmployeeNumber() *string
```

- *Type:* *string

---

##### `ExpirePasswordOnCreate`<sup>Required</sup> <a name="ExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreate"></a>

```go
func ExpirePasswordOnCreate() interface{}
```

- *Type:* interface{}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.user.User.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.user.User.property.honorificPrefix"></a>

```go
func HonorificPrefix() *string
```

- *Type:* *string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.user.User.property.honorificSuffix"></a>

```go
func HonorificSuffix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.user.User.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.user.User.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-okta.user.User.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.user.User.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-okta.user.User.property.manager"></a>

```go
func Manager() *string
```

- *Type:* *string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-okta.user.User.property.managerId"></a>

```go
func ManagerId() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-okta.user.User.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-okta.user.User.property.mobilePhone"></a>

```go
func MobilePhone() *string
```

- *Type:* *string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktf/provider-okta.user.User.property.nickName"></a>

```go
func NickName() *string
```

- *Type:* *string

---

##### `OldPassword`<sup>Required</sup> <a name="OldPassword" id="@cdktf/provider-okta.user.User.property.oldPassword"></a>

```go
func OldPassword() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-okta.user.User.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.user.User.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordInlineHook`<sup>Required</sup> <a name="PasswordInlineHook" id="@cdktf/provider-okta.user.User.property.passwordInlineHook"></a>

```go
func PasswordInlineHook() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-okta.user.User.property.postalAddress"></a>

```go
func PostalAddress() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.user.User.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `PrimaryPhone`<sup>Required</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.user.User.property.primaryPhone"></a>

```go
func PrimaryPhone() *string
```

- *Type:* *string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.user.User.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `RecoveryAnswer`<sup>Required</sup> <a name="RecoveryAnswer" id="@cdktf/provider-okta.user.User.property.recoveryAnswer"></a>

```go
func RecoveryAnswer() *string
```

- *Type:* *string

---

##### `RecoveryQuestion`<sup>Required</sup> <a name="RecoveryQuestion" id="@cdktf/provider-okta.user.User.property.recoveryQuestion"></a>

```go
func RecoveryQuestion() *string
```

- *Type:* *string

---

##### `SecondEmail`<sup>Required</sup> <a name="SecondEmail" id="@cdktf/provider-okta.user.User.property.secondEmail"></a>

```go
func SecondEmail() *string
```

- *Type:* *string

---

##### `SkipRoles`<sup>Required</sup> <a name="SkipRoles" id="@cdktf/provider-okta.user.User.property.skipRoles"></a>

```go
func SkipRoles() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.user.User.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.user.User.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-okta.user.User.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-okta.user.User.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.user.User.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.user.User.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-okta.user.User.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.user.User.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-okta.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

&user.UserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	FirstName: *string,
	LastName: *string,
	Login: *string,
	City: *string,
	CostCenter: *string,
	CountryCode: *string,
	CustomProfileAttributes: *string,
	CustomProfileAttributesToIgnore: *[]*string,
	Department: *string,
	DisplayName: *string,
	Division: *string,
	EmployeeNumber: *string,
	ExpirePasswordOnCreate: interface{},
	HonorificPrefix: *string,
	HonorificSuffix: *string,
	Id: *string,
	Locale: *string,
	Manager: *string,
	ManagerId: *string,
	MiddleName: *string,
	MobilePhone: *string,
	NickName: *string,
	OldPassword: *string,
	Organization: *string,
	Password: *string,
	PasswordHash: github.com/cdktf/cdktf-provider-okta-go/okta.user.UserPasswordHash,
	PasswordInlineHook: *string,
	PostalAddress: *string,
	PreferredLanguage: *string,
	PrimaryPhone: *string,
	ProfileUrl: *string,
	RecoveryAnswer: *string,
	RecoveryQuestion: *string,
	SecondEmail: *string,
	SkipRoles: interface{},
	State: *string,
	Status: *string,
	StreetAddress: *string,
	Timezone: *string,
	Title: *string,
	UserType: *string,
	ZipCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.email">Email</a></code> | <code>*string</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.firstName">FirstName</a></code> | <code>*string</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lastName">LastName</a></code> | <code>*string</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.login">Login</a></code> | <code>*string</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.city">City</a></code> | <code>*string</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.costCenter">CostCenter</a></code> | <code>*string</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.countryCode">CountryCode</a></code> | <code>*string</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>*string</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore">CustomProfileAttributesToIgnore</a></code> | <code>*[]*string</code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.department">Department</a></code> | <code>*string</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.division">Division</a></code> | <code>*string</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate">ExpirePasswordOnCreate</a></code> | <code>interface{}</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.locale">Locale</a></code> | <code>*string</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.manager">Manager</a></code> | <code>*string</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.managerId">ManagerId</a></code> | <code>*string</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.middleName">MiddleName</a></code> | <code>*string</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.nickName">NickName</a></code> | <code>*string</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.oldPassword">OldPassword</a></code> | <code>*string</code> | Old User Password. Should be only set in case the password was not changed using the provider. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.organization">Organization</a></code> | <code>*string</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.password">Password</a></code> | <code>*string</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordHash">PasswordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook">PasswordInlineHook</a></code> | <code>*string</code> | When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.postalAddress">PostalAddress</a></code> | <code>*string</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.primaryPhone">PrimaryPhone</a></code> | <code>*string</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer">RecoveryAnswer</a></code> | <code>*string</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion">RecoveryQuestion</a></code> | <code>*string</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.secondEmail">SecondEmail</a></code> | <code>*string</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.skipRoles">SkipRoles</a></code> | <code>interface{}</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.state">State</a></code> | <code>*string</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.status">Status</a></code> | <code>*string</code> | The status of the User in Okta - remove to set user back to active/provisioned. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.timezone">Timezone</a></code> | <code>*string</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.title">Title</a></code> | <code>*string</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.userType">UserType</a></code> | <code>*string</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.zipCode">ZipCode</a></code> | <code>*string</code> | User zipcode or postal code. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.user.UserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.user.UserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.user.UserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.user.UserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.user.UserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.user.UserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.user.UserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.user.UserConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#email User#email}

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.user.UserConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#first_name User#first_name}

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.user.UserConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#last_name User#last_name}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.user.UserConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#login User#login}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-okta.user.UserConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#city User#city}

---

##### `CostCenter`<sup>Optional</sup> <a name="CostCenter" id="@cdktf/provider-okta.user.UserConfig.property.costCenter"></a>

```go
CostCenter *string
```

- *Type:* *string

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#cost_center User#cost_center}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-okta.user.UserConfig.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#country_code User#country_code}

---

##### `CustomProfileAttributes`<sup>Optional</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes"></a>

```go
CustomProfileAttributes *string
```

- *Type:* *string

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `CustomProfileAttributesToIgnore`<sup>Optional</sup> <a name="CustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore"></a>

```go
CustomProfileAttributesToIgnore *[]*string
```

- *Type:* *[]*string

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-okta.user.UserConfig.property.department"></a>

```go
Department *string
```

- *Type:* *string

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#department User#department}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-okta.user.UserConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#display_name User#display_name}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-okta.user.UserConfig.property.division"></a>

```go
Division *string
```

- *Type:* *string

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#division User#division}

---

##### `EmployeeNumber`<sup>Optional</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.user.UserConfig.property.employeeNumber"></a>

```go
EmployeeNumber *string
```

- *Type:* *string

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#employee_number User#employee_number}

---

##### `ExpirePasswordOnCreate`<sup>Optional</sup> <a name="ExpirePasswordOnCreate" id="@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate"></a>

```go
ExpirePasswordOnCreate interface{}
```

- *Type:* interface{}

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `HonorificPrefix`<sup>Optional</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.user.UserConfig.property.honorificPrefix"></a>

```go
HonorificPrefix *string
```

- *Type:* *string

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `HonorificSuffix`<sup>Optional</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.user.UserConfig.property.honorificSuffix"></a>

```go
HonorificSuffix *string
```

- *Type:* *string

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.user.UserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-okta.user.UserConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#locale User#locale}

---

##### `Manager`<sup>Optional</sup> <a name="Manager" id="@cdktf/provider-okta.user.UserConfig.property.manager"></a>

```go
Manager *string
```

- *Type:* *string

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#manager User#manager}

---

##### `ManagerId`<sup>Optional</sup> <a name="ManagerId" id="@cdktf/provider-okta.user.UserConfig.property.managerId"></a>

```go
ManagerId *string
```

- *Type:* *string

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#manager_id User#manager_id}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktf/provider-okta.user.UserConfig.property.middleName"></a>

```go
MiddleName *string
```

- *Type:* *string

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#middle_name User#middle_name}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-okta.user.UserConfig.property.mobilePhone"></a>

```go
MobilePhone *string
```

- *Type:* *string

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `NickName`<sup>Optional</sup> <a name="NickName" id="@cdktf/provider-okta.user.UserConfig.property.nickName"></a>

```go
NickName *string
```

- *Type:* *string

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#nick_name User#nick_name}

---

##### `OldPassword`<sup>Optional</sup> <a name="OldPassword" id="@cdktf/provider-okta.user.UserConfig.property.oldPassword"></a>

```go
OldPassword *string
```

- *Type:* *string

Old User Password. Should be only set in case the password was not changed using the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#old_password User#old_password}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-okta.user.UserConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#organization User#organization}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.user.UserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#password User#password}

---

##### `PasswordHash`<sup>Optional</sup> <a name="PasswordHash" id="@cdktf/provider-okta.user.UserConfig.property.passwordHash"></a>

```go
PasswordHash UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#password_hash User#password_hash}

---

##### `PasswordInlineHook`<sup>Optional</sup> <a name="PasswordInlineHook" id="@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook"></a>

```go
PasswordInlineHook *string
```

- *Type:* *string

When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `PostalAddress`<sup>Optional</sup> <a name="PostalAddress" id="@cdktf/provider-okta.user.UserConfig.property.postalAddress"></a>

```go
PostalAddress *string
```

- *Type:* *string

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#postal_address User#postal_address}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.user.UserConfig.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#preferred_language User#preferred_language}

---

##### `PrimaryPhone`<sup>Optional</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.user.UserConfig.property.primaryPhone"></a>

```go
PrimaryPhone *string
```

- *Type:* *string

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#primary_phone User#primary_phone}

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.user.UserConfig.property.profileUrl"></a>

```go
ProfileUrl *string
```

- *Type:* *string

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#profile_url User#profile_url}

---

##### `RecoveryAnswer`<sup>Optional</sup> <a name="RecoveryAnswer" id="@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer"></a>

```go
RecoveryAnswer *string
```

- *Type:* *string

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `RecoveryQuestion`<sup>Optional</sup> <a name="RecoveryQuestion" id="@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion"></a>

```go
RecoveryQuestion *string
```

- *Type:* *string

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#recovery_question User#recovery_question}

---

##### `SecondEmail`<sup>Optional</sup> <a name="SecondEmail" id="@cdktf/provider-okta.user.UserConfig.property.secondEmail"></a>

```go
SecondEmail *string
```

- *Type:* *string

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#second_email User#second_email}

---

##### `SkipRoles`<sup>Optional</sup> <a name="SkipRoles" id="@cdktf/provider-okta.user.UserConfig.property.skipRoles"></a>

```go
SkipRoles interface{}
```

- *Type:* interface{}

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#skip_roles User#skip_roles}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-okta.user.UserConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#state User#state}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.user.UserConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the User in Okta - remove to set user back to active/provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#status User#status}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-okta.user.UserConfig.property.streetAddress"></a>

```go
StreetAddress *string
```

- *Type:* *string

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#street_address User#street_address}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-okta.user.UserConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#timezone User#timezone}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-okta.user.UserConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#title User#title}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.user.UserConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#user_type User#user_type}

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-okta.user.UserConfig.property.zipCode"></a>

```go
ZipCode *string
```

- *Type:* *string

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#zip_code User#zip_code}

---

### UserPasswordHash <a name="UserPasswordHash" id="@cdktf/provider-okta.user.UserPasswordHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserPasswordHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

&user.UserPasswordHash {
	Algorithm: *string,
	Value: *string,
	Salt: *string,
	SaltOrder: *string,
	WorkFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.algorithm">Algorithm</a></code> | <code>*string</code> | The algorithm used to generate the hash using the password. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.value">Value</a></code> | <code>*string</code> | For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.salt">Salt</a></code> | <code>*string</code> | Only required for salted hashes. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder">SaltOrder</a></code> | <code>*string</code> | Specifies whether salt was pre- or postfixed to the password before hashing. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.workFactor">WorkFactor</a></code> | <code>*f64</code> | Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-okta.user.UserPasswordHash.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#algorithm User#algorithm}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.UserPasswordHash.property.value"></a>

```go
Value *string
```

- *Type:* *string

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#value User#value}

---

##### `Salt`<sup>Optional</sup> <a name="Salt" id="@cdktf/provider-okta.user.UserPasswordHash.property.salt"></a>

```go
Salt *string
```

- *Type:* *string

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#salt User#salt}

---

##### `SaltOrder`<sup>Optional</sup> <a name="SaltOrder" id="@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder"></a>

```go
SaltOrder *string
```

- *Type:* *string

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#salt_order User#salt_order}

---

##### `WorkFactor`<sup>Optional</sup> <a name="WorkFactor" id="@cdktf/provider-okta.user.UserPasswordHash.property.workFactor"></a>

```go
WorkFactor *f64
```

- *Type:* *f64

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user#work_factor User#work_factor}

---

## Classes <a name="Classes" id="Classes"></a>

### UserPasswordHashOutputReference <a name="UserPasswordHashOutputReference" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/user"

user.NewUserPasswordHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) UserPasswordHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSalt` <a name="ResetSalt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt"></a>

```go
func ResetSalt()
```

##### `ResetSaltOrder` <a name="ResetSaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder"></a>

```go
func ResetSaltOrder()
```

##### `ResetWorkFactor` <a name="ResetWorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor"></a>

```go
func ResetWorkFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput">SaltInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput">SaltOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput">WorkFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt">Salt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder">SaltOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor">WorkFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `SaltInput`<sup>Optional</sup> <a name="SaltInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput"></a>

```go
func SaltInput() *string
```

- *Type:* *string

---

##### `SaltOrderInput`<sup>Optional</sup> <a name="SaltOrderInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput"></a>

```go
func SaltOrderInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `WorkFactorInput`<sup>Optional</sup> <a name="WorkFactorInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput"></a>

```go
func WorkFactorInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Salt`<sup>Required</sup> <a name="Salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt"></a>

```go
func Salt() *string
```

- *Type:* *string

---

##### `SaltOrder`<sup>Required</sup> <a name="SaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder"></a>

```go
func SaltOrder() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `WorkFactor`<sup>Required</sup> <a name="WorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor"></a>

```go
func WorkFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue"></a>

```go
func InternalValue() UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---



