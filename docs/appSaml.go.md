# `appSaml` Submodule <a name="`appSaml` Submodule" id="@cdktf/provider-okta.appSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSaml <a name="AppSaml" id="@cdktf/provider-okta.appSaml.AppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSaml(scope Construct, id *string, config AppSamlConfig) AppSaml
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements">PutAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints">ResetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned">ResetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements">ResetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef">ResetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm">ResetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn">ResetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer">ResetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid">ResetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed">ResetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned">ResetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled">ResetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion">ResetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate">ResetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer">ResetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl">ResetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer">ResetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl">ResetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat">ResetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate">ResetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSaml.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeStatements` <a name="PutAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements"></a>

```go
func PutAttributeStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts"></a>

```go
func PutTimeouts(value AppSamlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAcsEndpoints` <a name="ResetAcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints"></a>

```go
func ResetAcsEndpoints()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson"></a>

```go
func ResetAppSettingsJson()
```

##### `ResetAssertionSigned` <a name="ResetAssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned"></a>

```go
func ResetAssertionSigned()
```

##### `ResetAttributeStatements` <a name="ResetAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements"></a>

```go
func ResetAttributeStatements()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-okta.appSaml.AppSaml.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy"></a>

```go
func ResetAuthenticationPolicy()
```

##### `ResetAuthnContextClassRef` <a name="ResetAuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef"></a>

```go
func ResetAuthnContextClassRef()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState"></a>

```go
func ResetDefaultRelayState()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-okta.appSaml.AppSaml.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetDigestAlgorithm` <a name="ResetDigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm"></a>

```go
func ResetDigestAlgorithm()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetHonorForceAuthn` <a name="ResetHonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn"></a>

```go
func ResetHonorForceAuthn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSaml.AppSaml.resetId"></a>

```go
func ResetId()
```

##### `ResetIdpIssuer` <a name="ResetIdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer"></a>

```go
func ResetIdpIssuer()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment"></a>

```go
func ResetImplicitAssignment()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId"></a>

```go
func ResetInlineHookId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetKeyYearsValid` <a name="ResetKeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid"></a>

```go
func ResetKeyYearsValid()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appSaml.AppSaml.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp"></a>

```go
func ResetPreconfiguredApp()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-okta.appSaml.AppSaml.resetRecipient"></a>

```go
func ResetRecipient()
```

##### `ResetRequestCompressed` <a name="ResetRequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed"></a>

```go
func ResetRequestCompressed()
```

##### `ResetResponseSigned` <a name="ResetResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned"></a>

```go
func ResetResponseSigned()
```

##### `ResetSamlSignedRequestEnabled` <a name="ResetSamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled"></a>

```go
func ResetSamlSignedRequestEnabled()
```

##### `ResetSamlVersion` <a name="ResetSamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion"></a>

```go
func ResetSamlVersion()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```

##### `ResetSingleLogoutCertificate` <a name="ResetSingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate"></a>

```go
func ResetSingleLogoutCertificate()
```

##### `ResetSingleLogoutIssuer` <a name="ResetSingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer"></a>

```go
func ResetSingleLogoutIssuer()
```

##### `ResetSingleLogoutUrl` <a name="ResetSingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl"></a>

```go
func ResetSingleLogoutUrl()
```

##### `ResetSpIssuer` <a name="ResetSpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer"></a>

```go
func ResetSpIssuer()
```

##### `ResetSsoUrl` <a name="ResetSsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl"></a>

```go
func ResetSsoUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectNameIdFormat` <a name="ResetSubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat"></a>

```go
func ResetSubjectNameIdFormat()
```

##### `ResetSubjectNameIdTemplate` <a name="ResetSubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate"></a>

```go
func ResetSubjectNameIdTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.AppSaml_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.AppSaml_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.AppSaml_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.AppSaml_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements">AttributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl">EmbedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityKey">EntityKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl">EntityUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.features">Features</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding">HttpPostBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput">AcsEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput">AssertionSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput">AttributeStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput">AuthnContextClassRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput">DigestAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput">HonorForceAuthnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput">IdpIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput">KeyYearsValidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput">RecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput">RequestCompressedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput">ResponseSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput">SamlSignedRequestEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput">SamlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput">SingleLogoutCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput">SingleLogoutIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput">SingleLogoutUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput">SpIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput">SubjectNameIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput">SubjectNameIdTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints">AcsEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned">AssertionSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer">IdpIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid">KeyYearsValid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipient">Recipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed">RequestCompressed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned">ResponseSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion">SamlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer">SpIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSaml.AppSaml.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSaml.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSaml.AppSaml.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSaml.AppSaml.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSaml.AppSaml.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSaml.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeStatements`<sup>Required</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements"></a>

```go
func AttributeStatements() AppSamlAttributeStatementsList
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `EmbedUrl`<sup>Required</sup> <a name="EmbedUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl"></a>

```go
func EmbedUrl() *string
```

- *Type:* *string

---

##### `EntityKey`<sup>Required</sup> <a name="EntityKey" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityKey"></a>

```go
func EntityKey() *string
```

- *Type:* *string

---

##### `EntityUrl`<sup>Required</sup> <a name="EntityUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl"></a>

```go
func EntityUrl() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.appSaml.AppSaml.property.features"></a>

```go
func Features() *[]*string
```

- *Type:* *[]*string

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding"></a>

```go
func HttpPostBinding() *string
```

- *Type:* *string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding"></a>

```go
func HttpRedirectBinding() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-okta.appSaml.AppSaml.property.keys"></a>

```go
func Keys() AppSamlKeysList
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl"></a>

```go
func MetadataUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSaml.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeouts"></a>

```go
func Timeouts() AppSamlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AcsEndpointsInput`<sup>Optional</sup> <a name="AcsEndpointsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput"></a>

```go
func AcsEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput"></a>

```go
func AppSettingsJsonInput() *string
```

- *Type:* *string

---

##### `AssertionSignedInput`<sup>Optional</sup> <a name="AssertionSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput"></a>

```go
func AssertionSignedInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeStatementsInput`<sup>Optional</sup> <a name="AttributeStatementsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput"></a>

```go
func AttributeStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput"></a>

```go
func AuthenticationPolicyInput() *string
```

- *Type:* *string

---

##### `AuthnContextClassRefInput`<sup>Optional</sup> <a name="AuthnContextClassRefInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput"></a>

```go
func AuthnContextClassRefInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput"></a>

```go
func DefaultRelayStateInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DigestAlgorithmInput`<sup>Optional</sup> <a name="DigestAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput"></a>

```go
func DigestAlgorithmInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `HonorForceAuthnInput`<sup>Optional</sup> <a name="HonorForceAuthnInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput"></a>

```go
func HonorForceAuthnInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIssuerInput`<sup>Optional</sup> <a name="IdpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput"></a>

```go
func IdpIssuerInput() *string
```

- *Type:* *string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput"></a>

```go
func ImplicitAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput"></a>

```go
func InlineHookIdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyYearsValidInput`<sup>Optional</sup> <a name="KeyYearsValidInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput"></a>

```go
func KeyYearsValidInput() *f64
```

- *Type:* *f64

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput"></a>

```go
func PreconfiguredAppInput() *string
```

- *Type:* *string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput"></a>

```go
func RecipientInput() *string
```

- *Type:* *string

---

##### `RequestCompressedInput`<sup>Optional</sup> <a name="RequestCompressedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput"></a>

```go
func RequestCompressedInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseSignedInput`<sup>Optional</sup> <a name="ResponseSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput"></a>

```go
func ResponseSignedInput() interface{}
```

- *Type:* interface{}

---

##### `SamlSignedRequestEnabledInput`<sup>Optional</sup> <a name="SamlSignedRequestEnabledInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput"></a>

```go
func SamlSignedRequestEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SamlVersionInput`<sup>Optional</sup> <a name="SamlVersionInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput"></a>

```go
func SamlVersionInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SingleLogoutCertificateInput`<sup>Optional</sup> <a name="SingleLogoutCertificateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput"></a>

```go
func SingleLogoutCertificateInput() *string
```

- *Type:* *string

---

##### `SingleLogoutIssuerInput`<sup>Optional</sup> <a name="SingleLogoutIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput"></a>

```go
func SingleLogoutIssuerInput() *string
```

- *Type:* *string

---

##### `SingleLogoutUrlInput`<sup>Optional</sup> <a name="SingleLogoutUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput"></a>

```go
func SingleLogoutUrlInput() *string
```

- *Type:* *string

---

##### `SpIssuerInput`<sup>Optional</sup> <a name="SpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput"></a>

```go
func SpIssuerInput() *string
```

- *Type:* *string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectNameIdFormatInput`<sup>Optional</sup> <a name="SubjectNameIdFormatInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput"></a>

```go
func SubjectNameIdFormatInput() *string
```

- *Type:* *string

---

##### `SubjectNameIdTemplateInput`<sup>Optional</sup> <a name="SubjectNameIdTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput"></a>

```go
func SubjectNameIdTemplateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AcsEndpoints`<sup>Required</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints"></a>

```go
func AcsEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson"></a>

```go
func AppSettingsJson() *string
```

- *Type:* *string

---

##### `AssertionSigned`<sup>Required</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned"></a>

```go
func AssertionSigned() interface{}
```

- *Type:* interface{}

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.appSaml.AppSaml.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy"></a>

```go
func AuthenticationPolicy() *string
```

- *Type:* *string

---

##### `AuthnContextClassRef`<sup>Required</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef"></a>

```go
func AuthnContextClassRef() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState"></a>

```go
func DefaultRelayState() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-okta.appSaml.AppSaml.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm"></a>

```go
func DigestAlgorithm() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `HonorForceAuthn`<sup>Required</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn"></a>

```go
func HonorForceAuthn() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSaml.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpIssuer`<sup>Required</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer"></a>

```go
func IdpIssuer() *string
```

- *Type:* *string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment"></a>

```go
func ImplicitAssignment() interface{}
```

- *Type:* interface{}

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId"></a>

```go
func InlineHookId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyYearsValid`<sup>Required</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid"></a>

```go
func KeyYearsValid() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSaml.AppSaml.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appSaml.AppSaml.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp"></a>

```go
func PreconfiguredApp() *string
```

- *Type:* *string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipient"></a>

```go
func Recipient() *string
```

- *Type:* *string

---

##### `RequestCompressed`<sup>Required</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed"></a>

```go
func RequestCompressed() interface{}
```

- *Type:* interface{}

---

##### `ResponseSigned`<sup>Required</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned"></a>

```go
func ResponseSigned() interface{}
```

- *Type:* interface{}

---

##### `SamlSignedRequestEnabled`<sup>Required</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled"></a>

```go
func SamlSignedRequestEnabled() interface{}
```

- *Type:* interface{}

---

##### `SamlVersion`<sup>Required</sup> <a name="SamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion"></a>

```go
func SamlVersion() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `SingleLogoutCertificate`<sup>Required</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate"></a>

```go
func SingleLogoutCertificate() *string
```

- *Type:* *string

---

##### `SingleLogoutIssuer`<sup>Required</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer"></a>

```go
func SingleLogoutIssuer() *string
```

- *Type:* *string

---

##### `SingleLogoutUrl`<sup>Required</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl"></a>

```go
func SingleLogoutUrl() *string
```

- *Type:* *string

---

##### `SpIssuer`<sup>Required</sup> <a name="SpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer"></a>

```go
func SpIssuer() *string
```

- *Type:* *string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSaml.AppSaml.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectNameIdFormat`<sup>Required</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat"></a>

```go
func SubjectNameIdFormat() *string
```

- *Type:* *string

---

##### `SubjectNameIdTemplate`<sup>Required</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate"></a>

```go
func SubjectNameIdTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSamlAttributeStatements <a name="AppSamlAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

&appsaml.AppSamlAttributeStatements {
	Name: *string,
	FilterType: *string,
	FilterValue: *string,
	Namespace: *string,
	Type: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name">Name</a></code> | <code>*string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType">FilterType</a></code> | <code>*string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue">FilterValue</a></code> | <code>*string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace">Namespace</a></code> | <code>*string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type">Type</a></code> | <code>*string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#values AppSaml#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name"></a>

```go
Name *string
```

- *Type:* *string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#name AppSaml#name}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#filter_type AppSaml#filter_type}

---

##### `FilterValue`<sup>Optional</sup> <a name="FilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue"></a>

```go
FilterValue *string
```

- *Type:* *string

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#filter_value AppSaml#filter_value}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#namespace AppSaml#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#type AppSaml#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#values AppSaml#values}.

---

### AppSamlConfig <a name="AppSamlConfig" id="@cdktf/provider-okta.appSaml.AppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

&appsaml.AppSamlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AcsEndpoints: *[]*string,
	AdminNote: *string,
	AppLinksJson: *string,
	AppSettingsJson: *string,
	AssertionSigned: interface{},
	AttributeStatements: interface{},
	Audience: *string,
	AuthenticationPolicy: *string,
	AuthnContextClassRef: *string,
	AutoSubmitToolbar: interface{},
	DefaultRelayState: *string,
	Destination: *string,
	DigestAlgorithm: *string,
	EnduserNote: *string,
	HideIos: interface{},
	HideWeb: interface{},
	HonorForceAuthn: interface{},
	Id: *string,
	IdpIssuer: *string,
	ImplicitAssignment: interface{},
	InlineHookId: *string,
	KeyName: *string,
	KeyYearsValid: *f64,
	Logo: *string,
	PreconfiguredApp: *string,
	Recipient: *string,
	RequestCompressed: interface{},
	ResponseSigned: interface{},
	SamlSignedRequestEnabled: interface{},
	SamlVersion: *string,
	SignatureAlgorithm: *string,
	SingleLogoutCertificate: *string,
	SingleLogoutIssuer: *string,
	SingleLogoutUrl: *string,
	SpIssuer: *string,
	SsoUrl: *string,
	Status: *string,
	SubjectNameIdFormat: *string,
	SubjectNameIdTemplate: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v13.appSaml.AppSamlTimeouts,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints">AcsEndpoints</a></code> | <code>*[]*string</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned">AssertionSigned</a></code> | <code>interface{}</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements">AttributeStatements</a></code> | <code>interface{}</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience">Audience</a></code> | <code>*string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>*string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination">Destination</a></code> | <code>*string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>*string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>interface{}</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer">IdpIssuer</a></code> | <code>*string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid">KeyYearsValid</a></code> | <code>*f64</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient">Recipient</a></code> | <code>*string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed">RequestCompressed</a></code> | <code>interface{}</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned">ResponseSigned</a></code> | <code>interface{}</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>interface{}</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion">SamlVersion</a></code> | <code>*string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>*string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>*string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>*string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer">SpIssuer</a></code> | <code>*string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>*string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>*string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#label AppSaml#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `AcsEndpoints`<sup>Optional</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints"></a>

```go
AcsEndpoints *[]*string
```

- *Type:* *[]*string

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson"></a>

```go
AppSettingsJson *string
```

- *Type:* *string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `AssertionSigned`<sup>Optional</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned"></a>

```go
AssertionSigned interface{}
```

- *Type:* interface{}

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `AttributeStatements`<sup>Optional</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements"></a>

```go
AttributeStatements interface{}
```

- *Type:* interface{}

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#audience AppSaml#audience}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy"></a>

```go
AuthenticationPolicy *string
```

- *Type:* *string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `AuthnContextClassRef`<sup>Optional</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef"></a>

```go
AuthnContextClassRef *string
```

- *Type:* *string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState"></a>

```go
DefaultRelayState *string
```

- *Type:* *string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#destination AppSaml#destination}

---

##### `DigestAlgorithm`<sup>Optional</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm"></a>

```go
DigestAlgorithm *string
```

- *Type:* *string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `HonorForceAuthn`<sup>Optional</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn"></a>

```go
HonorForceAuthn interface{}
```

- *Type:* interface{}

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpIssuer`<sup>Optional</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer"></a>

```go
IdpIssuer *string
```

- *Type:* *string

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment"></a>

```go
ImplicitAssignment interface{}
```

- *Type:* interface{}

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId"></a>

```go
InlineHookId *string
```

- *Type:* *string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `KeyYearsValid`<sup>Optional</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid"></a>

```go
KeyYearsValid *f64
```

- *Type:* *f64

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#logo AppSaml#logo}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp"></a>

```go
PreconfiguredApp *string
```

- *Type:* *string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient"></a>

```go
Recipient *string
```

- *Type:* *string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `RequestCompressed`<sup>Optional</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed"></a>

```go
RequestCompressed interface{}
```

- *Type:* interface{}

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `ResponseSigned`<sup>Optional</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned"></a>

```go
ResponseSigned interface{}
```

- *Type:* interface{}

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `SamlSignedRequestEnabled`<sup>Optional</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled"></a>

```go
SamlSignedRequestEnabled interface{}
```

- *Type:* interface{}

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `SamlVersion`<sup>Optional</sup> <a name="SamlVersion" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion"></a>

```go
SamlVersion *string
```

- *Type:* *string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `SingleLogoutCertificate`<sup>Optional</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate"></a>

```go
SingleLogoutCertificate *string
```

- *Type:* *string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `SingleLogoutIssuer`<sup>Optional</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer"></a>

```go
SingleLogoutIssuer *string
```

- *Type:* *string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `SingleLogoutUrl`<sup>Optional</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl"></a>

```go
SingleLogoutUrl *string
```

- *Type:* *string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `SpIssuer`<sup>Optional</sup> <a name="SpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer"></a>

```go
SpIssuer *string
```

- *Type:* *string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `SsoUrl`<sup>Optional</sup> <a name="SsoUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#status AppSaml#status}

---

##### `SubjectNameIdFormat`<sup>Optional</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat"></a>

```go
SubjectNameIdFormat *string
```

- *Type:* *string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `SubjectNameIdTemplate`<sup>Optional</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate"></a>

```go
SubjectNameIdTemplate *string
```

- *Type:* *string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts"></a>

```go
Timeouts AppSamlTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

### AppSamlKeys <a name="AppSamlKeys" id="@cdktf/provider-okta.appSaml.AppSamlKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

&appsaml.AppSamlKeys {

}
```


### AppSamlTimeouts <a name="AppSamlTimeouts" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

&appsaml.AppSamlTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#create AppSaml#create}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#read AppSaml#read}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#update AppSaml#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#create AppSaml#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#read AppSaml#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_saml#update AppSaml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSamlAttributeStatementsList <a name="AppSamlAttributeStatementsList" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSamlAttributeStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppSamlAttributeStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get"></a>

```go
func Get(index *f64) AppSamlAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppSamlAttributeStatementsOutputReference <a name="AppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSamlAttributeStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppSamlAttributeStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue">ResetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetFilterValue` <a name="ResetFilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue"></a>

```go
func ResetFilterValue()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput">FilterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue">FilterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `FilterValueInput`<sup>Optional</sup> <a name="FilterValueInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput"></a>

```go
func FilterValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `FilterValue`<sup>Required</sup> <a name="FilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```go
func FilterValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppSamlKeysList <a name="AppSamlKeysList" id="@cdktf/provider-okta.appSaml.AppSamlKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSamlKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppSamlKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get"></a>

```go
func Get(index *f64) AppSamlKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AppSamlKeysOutputReference <a name="AppSamlKeysOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSamlKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppSamlKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use">Use</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C">X5C</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256">X5TS256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use"></a>

```go
func Use() *string
```

- *Type:* *string

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C"></a>

```go
func X5C() *[]*string
```

- *Type:* *[]*string

---

##### `X5TS256`<sup>Required</sup> <a name="X5TS256" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256"></a>

```go
func X5TS256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() AppSamlKeys
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a>

---


### AppSamlTimeoutsOutputReference <a name="AppSamlTimeoutsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsaml"

appsaml.NewAppSamlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppSamlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



