# `appSecurePasswordStore` Submodule <a name="`appSecurePasswordStore` Submodule" id="@cdktf/provider-okta.appSecurePasswordStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSecurePasswordStore <a name="AppSecurePasswordStore" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store okta_app_secure_password_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.NewAppSecurePasswordStore(scope Construct, id *string, config AppSecurePasswordStoreConfig) AppSecurePasswordStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig">AppSecurePasswordStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme">ResetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1">ResetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value">ResetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2">ResetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value">ResetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3">ResetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value">ResetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword">ResetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword">ResetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername">ResetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts"></a>

```go
func PutTimeouts(value AppSecurePasswordStoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetCredentialsScheme` <a name="ResetCredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme"></a>

```go
func ResetCredentialsScheme()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId"></a>

```go
func ResetId()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetOptionalField1` <a name="ResetOptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1"></a>

```go
func ResetOptionalField1()
```

##### `ResetOptionalField1Value` <a name="ResetOptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value"></a>

```go
func ResetOptionalField1Value()
```

##### `ResetOptionalField2` <a name="ResetOptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2"></a>

```go
func ResetOptionalField2()
```

##### `ResetOptionalField2Value` <a name="ResetOptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value"></a>

```go
func ResetOptionalField2Value()
```

##### `ResetOptionalField3` <a name="ResetOptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3"></a>

```go
func ResetOptionalField3()
```

##### `ResetOptionalField3Value` <a name="ResetOptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value"></a>

```go
func ResetOptionalField3Value()
```

##### `ResetRevealPassword` <a name="ResetRevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword"></a>

```go
func ResetRevealPassword()
```

##### `ResetSharedPassword` <a name="ResetSharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword"></a>

```go
func ResetSharedPassword()
```

##### `ResetSharedUsername` <a name="ResetSharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername"></a>

```go
func ResetSharedUsername()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.AppSecurePasswordStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.AppSecurePasswordStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.AppSecurePasswordStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.AppSecurePasswordStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppSecurePasswordStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppSecurePasswordStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppSecurePasswordStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput">CredentialsSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input">OptionalField1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput">OptionalField1ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input">OptionalField2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput">OptionalField2ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input">OptionalField3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput">OptionalField3ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput">PasswordFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput">RevealPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput">SharedPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput">SharedUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput">UsernameFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1">OptionalField1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value">OptionalField1Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2">OptionalField2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value">OptionalField2Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3">OptionalField3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value">OptionalField3Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField">PasswordField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField">UsernameField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts"></a>

```go
func Timeouts() AppSecurePasswordStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsSchemeInput`<sup>Optional</sup> <a name="CredentialsSchemeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput"></a>

```go
func CredentialsSchemeInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `OptionalField1Input`<sup>Optional</sup> <a name="OptionalField1Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input"></a>

```go
func OptionalField1Input() *string
```

- *Type:* *string

---

##### `OptionalField1ValueInput`<sup>Optional</sup> <a name="OptionalField1ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput"></a>

```go
func OptionalField1ValueInput() *string
```

- *Type:* *string

---

##### `OptionalField2Input`<sup>Optional</sup> <a name="OptionalField2Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input"></a>

```go
func OptionalField2Input() *string
```

- *Type:* *string

---

##### `OptionalField2ValueInput`<sup>Optional</sup> <a name="OptionalField2ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput"></a>

```go
func OptionalField2ValueInput() *string
```

- *Type:* *string

---

##### `OptionalField3Input`<sup>Optional</sup> <a name="OptionalField3Input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input"></a>

```go
func OptionalField3Input() *string
```

- *Type:* *string

---

##### `OptionalField3ValueInput`<sup>Optional</sup> <a name="OptionalField3ValueInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput"></a>

```go
func OptionalField3ValueInput() *string
```

- *Type:* *string

---

##### `PasswordFieldInput`<sup>Optional</sup> <a name="PasswordFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput"></a>

```go
func PasswordFieldInput() *string
```

- *Type:* *string

---

##### `RevealPasswordInput`<sup>Optional</sup> <a name="RevealPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput"></a>

```go
func RevealPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `SharedPasswordInput`<sup>Optional</sup> <a name="SharedPasswordInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput"></a>

```go
func SharedPasswordInput() *string
```

- *Type:* *string

---

##### `SharedUsernameInput`<sup>Optional</sup> <a name="SharedUsernameInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput"></a>

```go
func SharedUsernameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameFieldInput`<sup>Optional</sup> <a name="UsernameFieldInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput"></a>

```go
func UsernameFieldInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `CredentialsScheme`<sup>Required</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme"></a>

```go
func CredentialsScheme() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `OptionalField1`<sup>Required</sup> <a name="OptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1"></a>

```go
func OptionalField1() *string
```

- *Type:* *string

---

##### `OptionalField1Value`<sup>Required</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value"></a>

```go
func OptionalField1Value() *string
```

- *Type:* *string

---

##### `OptionalField2`<sup>Required</sup> <a name="OptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2"></a>

```go
func OptionalField2() *string
```

- *Type:* *string

---

##### `OptionalField2Value`<sup>Required</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value"></a>

```go
func OptionalField2Value() *string
```

- *Type:* *string

---

##### `OptionalField3`<sup>Required</sup> <a name="OptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3"></a>

```go
func OptionalField3() *string
```

- *Type:* *string

---

##### `OptionalField3Value`<sup>Required</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value"></a>

```go
func OptionalField3Value() *string
```

- *Type:* *string

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField"></a>

```go
func PasswordField() *string
```

- *Type:* *string

---

##### `RevealPassword`<sup>Required</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword"></a>

```go
func RevealPassword() interface{}
```

- *Type:* interface{}

---

##### `SharedPassword`<sup>Required</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword"></a>

```go
func SharedPassword() *string
```

- *Type:* *string

---

##### `SharedUsername`<sup>Required</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername"></a>

```go
func SharedUsername() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField"></a>

```go
func UsernameField() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSecurePasswordStoreConfig <a name="AppSecurePasswordStoreConfig" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

&appsecurepasswordstore.AppSecurePasswordStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	PasswordField: *string,
	Url: *string,
	UsernameField: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AutoSubmitToolbar: interface{},
	CredentialsScheme: *string,
	EnduserNote: *string,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	Logo: *string,
	OptionalField1: *string,
	OptionalField1Value: *string,
	OptionalField2: *string,
	OptionalField2Value: *string,
	OptionalField3: *string,
	OptionalField3Value: *string,
	RevealPassword: interface{},
	SharedPassword: *string,
	SharedUsername: *string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v13.appSecurePasswordStore.AppSecurePasswordStoreTimeouts,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label">Label</a></code> | <code>*string</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField">PasswordField</a></code> | <code>*string</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url">Url</a></code> | <code>*string</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField">UsernameField</a></code> | <code>*string</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme">CredentialsScheme</a></code> | <code>*string</code> | Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo">Logo</a></code> | <code>*string</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1">OptionalField1</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value">OptionalField1Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2">OptionalField2</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value">OptionalField2Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3">OptionalField3</a></code> | <code>*string</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value">OptionalField3Value</a></code> | <code>*string</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword">RevealPassword</a></code> | <code>interface{}</code> | Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword">SharedPassword</a></code> | <code>*string</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername">SharedUsername</a></code> | <code>*string</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. Default: `BUILT_IN`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#label AppSecurePasswordStore#label}

---

##### `PasswordField`<sup>Required</sup> <a name="PasswordField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField"></a>

```go
PasswordField *string
```

- *Type:* *string

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#password_field AppSecurePasswordStore#password_field}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#url AppSecurePasswordStore#url}

---

##### `UsernameField`<sup>Required</sup> <a name="UsernameField" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField"></a>

```go
UsernameField *string
```

- *Type:* *string

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#username_field AppSecurePasswordStore#username_field}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}

---

##### `CredentialsScheme`<sup>Optional</sup> <a name="CredentialsScheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme"></a>

```go
CredentialsScheme *string
```

- *Type:* *string

Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#logo AppSecurePasswordStore#logo}

---

##### `OptionalField1`<sup>Optional</sup> <a name="OptionalField1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1"></a>

```go
OptionalField1 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}

---

##### `OptionalField1Value`<sup>Optional</sup> <a name="OptionalField1Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value"></a>

```go
OptionalField1Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}

---

##### `OptionalField2`<sup>Optional</sup> <a name="OptionalField2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2"></a>

```go
OptionalField2 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}

---

##### `OptionalField2Value`<sup>Optional</sup> <a name="OptionalField2Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value"></a>

```go
OptionalField2Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}

---

##### `OptionalField3`<sup>Optional</sup> <a name="OptionalField3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3"></a>

```go
OptionalField3 *string
```

- *Type:* *string

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}

---

##### `OptionalField3Value`<sup>Optional</sup> <a name="OptionalField3Value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value"></a>

```go
OptionalField3Value *string
```

- *Type:* *string

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}

---

##### `RevealPassword`<sup>Optional</sup> <a name="RevealPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword"></a>

```go
RevealPassword interface{}
```

- *Type:* interface{}

Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}

---

##### `SharedPassword`<sup>Optional</sup> <a name="SharedPassword" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword"></a>

```go
SharedPassword *string
```

- *Type:* *string

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}

---

##### `SharedUsername`<sup>Optional</sup> <a name="SharedUsername" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername"></a>

```go
SharedUsername *string
```

- *Type:* *string

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#status AppSecurePasswordStore#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts"></a>

```go
Timeouts AppSecurePasswordStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}

---

### AppSecurePasswordStoreTimeouts <a name="AppSecurePasswordStoreTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

&appsecurepasswordstore.AppSecurePasswordStoreTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSecurePasswordStoreTimeoutsOutputReference <a name="AppSecurePasswordStoreTimeoutsOutputReference" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsecurepasswordstore"

appsecurepasswordstore.NewAppSecurePasswordStoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppSecurePasswordStoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



