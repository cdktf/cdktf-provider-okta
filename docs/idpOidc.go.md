# `idpOidc` Submodule <a name="`idpOidc` Submodule" id="@cdktf/provider-okta.idpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpOidc <a name="IdpOidc" id="@cdktf/provider-okta.idpOidc.IdpOidc"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

idpoidc.NewIdpOidc(scope Construct, id *string, config IdpOidcConfig) IdpOidc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding">ResetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl">ResetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idpOidc.IdpOidc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.idpOidc.IdpOidc.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction"></a>

```go
func ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude"></a>

```go
func ResetAccountLinkGroupInclude()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction"></a>

```go
func ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction"></a>

```go
func ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment"></a>

```go
func ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute"></a>

```go
func ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter"></a>

```go
func ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew"></a>

```go
func ResetMaxClockSkew()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetPkceRequired"></a>

```go
func ResetPkceRequired()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster"></a>

```go
func ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType"></a>

```go
func ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction"></a>

```go
func ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm"></a>

```go
func ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope"></a>

```go
func ResetRequestSignatureScope()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute"></a>

```go
func ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType"></a>

```go
func ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction"></a>

```go
func ResetSuspendedAction()
```

##### `ResetUserInfoBinding` <a name="ResetUserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding"></a>

```go
func ResetUserInfoBinding()
```

##### `ResetUserInfoUrl` <a name="ResetUserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl"></a>

```go
func ResetUserInfoUrl()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdpOidc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

idpoidc.IdpOidc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

idpoidc.IdpOidc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

idpoidc.IdpOidc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

idpoidc.IdpOidc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdpOidc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdpOidc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdpOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdpOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId">UserTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput">AuthorizationBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput">GroupsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput">JwksBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput">JwksUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput">ProfileMasterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput">TokenBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput">UserInfoBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput">UserInfoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding">AuthorizationBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding">JwksBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding">TokenBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding">UserInfoBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl">UserInfoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId"></a>

```go
func UserTypeId() *string
```

- *Type:* *string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput"></a>

```go
func AccountLinkActionInput() *string
```

- *Type:* *string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput"></a>

```go
func AccountLinkGroupIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationBindingInput`<sup>Optional</sup> <a name="AuthorizationBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput"></a>

```go
func AuthorizationBindingInput() *string
```

- *Type:* *string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput"></a>

```go
func AuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput"></a>

```go
func DeprovisionedActionInput() *string
```

- *Type:* *string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput"></a>

```go
func GroupsActionInput() *string
```

- *Type:* *string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput"></a>

```go
func GroupsAssignmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput"></a>

```go
func GroupsAttributeInput() *string
```

- *Type:* *string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput"></a>

```go
func GroupsFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput"></a>

```go
func IssuerUrlInput() *string
```

- *Type:* *string

---

##### `JwksBindingInput`<sup>Optional</sup> <a name="JwksBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput"></a>

```go
func JwksBindingInput() *string
```

- *Type:* *string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput"></a>

```go
func JwksUrlInput() *string
```

- *Type:* *string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput"></a>

```go
func MaxClockSkewInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequiredInput"></a>

```go
func PkceRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput"></a>

```go
func ProfileMasterInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput"></a>

```go
func ProvisioningActionInput() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput"></a>

```go
func RequestSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput"></a>

```go
func RequestSignatureScopeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput"></a>

```go
func SubjectMatchAttributeInput() *string
```

- *Type:* *string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput"></a>

```go
func SubjectMatchTypeInput() *string
```

- *Type:* *string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput"></a>

```go
func SuspendedActionInput() *string
```

- *Type:* *string

---

##### `TokenBindingInput`<sup>Optional</sup> <a name="TokenBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput"></a>

```go
func TokenBindingInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `UserInfoBindingInput`<sup>Optional</sup> <a name="UserInfoBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput"></a>

```go
func UserInfoBindingInput() *string
```

- *Type:* *string

---

##### `UserInfoUrlInput`<sup>Optional</sup> <a name="UserInfoUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput"></a>

```go
func UserInfoUrlInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction"></a>

```go
func AccountLinkAction() *string
```

- *Type:* *string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude"></a>

```go
func AccountLinkGroupInclude() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding"></a>

```go
func AuthorizationBinding() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction"></a>

```go
func DeprovisionedAction() *string
```

- *Type:* *string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction"></a>

```go
func GroupsAction() *string
```

- *Type:* *string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment"></a>

```go
func GroupsAssignment() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute"></a>

```go
func GroupsAttribute() *string
```

- *Type:* *string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter"></a>

```go
func GroupsFilter() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding"></a>

```go
func JwksBinding() *string
```

- *Type:* *string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl"></a>

```go
func JwksUrl() *string
```

- *Type:* *string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew"></a>

```go
func MaxClockSkew() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.pkceRequired"></a>

```go
func PkceRequired() interface{}
```

- *Type:* interface{}

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster"></a>

```go
func ProfileMaster() interface{}
```

- *Type:* interface{}

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction"></a>

```go
func ProvisioningAction() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm"></a>

```go
func RequestSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope"></a>

```go
func RequestSignatureScope() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute"></a>

```go
func SubjectMatchAttribute() *string
```

- *Type:* *string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType"></a>

```go
func SubjectMatchType() *string
```

- *Type:* *string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction"></a>

```go
func SuspendedAction() *string
```

- *Type:* *string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding"></a>

```go
func TokenBinding() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `UserInfoBinding`<sup>Required</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding"></a>

```go
func UserInfoBinding() *string
```

- *Type:* *string

---

##### `UserInfoUrl`<sup>Required</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl"></a>

```go
func UserInfoUrl() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpOidcConfig <a name="IdpOidcConfig" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v14/idpoidc"

&idpoidc.IdpOidcConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizationBinding: *string,
	AuthorizationUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	IssuerUrl: *string,
	JwksBinding: *string,
	JwksUrl: *string,
	Name: *string,
	Scopes: *[]*string,
	TokenBinding: *string,
	TokenUrl: *string,
	AccountLinkAction: *string,
	AccountLinkGroupInclude: *[]*string,
	DeprovisionedAction: *string,
	GroupsAction: *string,
	GroupsAssignment: *[]*string,
	GroupsAttribute: *string,
	GroupsFilter: *[]*string,
	Id: *string,
	IssuerMode: *string,
	MaxClockSkew: *f64,
	PkceRequired: interface{},
	ProfileMaster: interface{},
	ProtocolType: *string,
	ProvisioningAction: *string,
	RequestSignatureAlgorithm: *string,
	RequestSignatureScope: *string,
	Status: *string,
	SubjectMatchAttribute: *string,
	SubjectMatchType: *string,
	SuspendedAction: *string,
	UserInfoBinding: *string,
	UserInfoUrl: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding">AuthorizationBinding</a></code> | <code>*string</code> | The method of making an authorization request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | IdP Authorization Server (AS) endpoint to request consent from the user and obtain an authorization code grant. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Unique identifier issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Client secret issued by AS for the Okta IdP instance. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | URI that identifies the issuer. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding">JwksBinding</a></code> | <code>*string</code> | The method of making a request for the OIDC JWKS. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | Endpoint where the keys signer publishes its keys in a JWK Set. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name">Name</a></code> | <code>*string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The scopes of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding">TokenBinding</a></code> | <code>*string</code> | The method of making a token request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | IdP Authorization Server (AS) endpoint to exchange the authorization code grant for an access token. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | Indicates whether Okta uses the original Okta org domain URL, a custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/idps/#oauth-2-0-and-openid-connect-client-object. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType">ProtocolType</a></code> | <code>*string</code> | The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OIDC`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | Specifies whether to digitally sign an AuthnRequest messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status">Status</a></code> | <code>*string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding">UserInfoBinding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl">UserInfoUrl</a></code> | <code>*string</code> | Protected resource endpoint that returns claims about the authenticated user. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding"></a>

```go
AuthorizationBinding *string
```

- *Type:* *string

The method of making an authorization request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#authorization_binding IdpOidc#authorization_binding}

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl"></a>

```go
AuthorizationUrl *string
```

- *Type:* *string

IdP Authorization Server (AS) endpoint to request consent from the user and obtain an authorization code grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#authorization_url IdpOidc#authorization_url}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Unique identifier issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#client_id IdpOidc#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Client secret issued by AS for the Okta IdP instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#client_secret IdpOidc#client_secret}

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl"></a>

```go
IssuerUrl *string
```

- *Type:* *string

URI that identifies the issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#issuer_url IdpOidc#issuer_url}

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding"></a>

```go
JwksBinding *string
```

- *Type:* *string

The method of making a request for the OIDC JWKS. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#jwks_binding IdpOidc#jwks_binding}

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl"></a>

```go
JwksUrl *string
```

- *Type:* *string

Endpoint where the keys signer publishes its keys in a JWK Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#jwks_url IdpOidc#jwks_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#name IdpOidc#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The scopes of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#scopes IdpOidc#scopes}

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding"></a>

```go
TokenBinding *string
```

- *Type:* *string

The method of making a token request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#token_binding IdpOidc#token_binding}

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

IdP Authorization Server (AS) endpoint to exchange the authorization code grant for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#token_url IdpOidc#token_url}

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction"></a>

```go
AccountLinkAction *string
```

- *Type:* *string

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#account_link_action IdpOidc#account_link_action}

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude"></a>

```go
AccountLinkGroupInclude *[]*string
```

- *Type:* *[]*string

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction"></a>

```go
DeprovisionedAction *string
```

- *Type:* *string

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction"></a>

```go
GroupsAction *string
```

- *Type:* *string

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_action IdpOidc#groups_action}

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment"></a>

```go
GroupsAssignment *[]*string
```

- *Type:* *[]*string

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_assignment IdpOidc#groups_assignment}

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute"></a>

```go
GroupsAttribute *string
```

- *Type:* *string

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_attribute IdpOidc#groups_attribute}

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter"></a>

```go
GroupsFilter *[]*string
```

- *Type:* *[]*string

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#groups_filter IdpOidc#groups_filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

Indicates whether Okta uses the original Okta org domain URL, a custom domain URL, or dynamic.

It can be `ORG_URL`, `CUSTOM_URL`, or `DYNAMIC`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew"></a>

```go
MaxClockSkew *f64
```

- *Type:* *f64

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.pkceRequired"></a>

```go
PkceRequired interface{}
```

- *Type:* interface{}

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/idps/#oauth-2-0-and-openid-connect-client-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#pkce_required IdpOidc#pkce_required}

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster"></a>

```go
ProfileMaster interface{}
```

- *Type:* interface{}

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#profile_master IdpOidc#profile_master}

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

The type of protocol to use. It can be `OIDC` or `OAUTH2`. Default: `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#protocol_type IdpOidc#protocol_type}

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction"></a>

```go
ProvisioningAction *string
```

- *Type:* *string

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#provisioning_action IdpOidc#provisioning_action}

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm"></a>

```go
RequestSignatureAlgorithm *string
```

- *Type:* *string

The HMAC Signature Algorithm used when signing an authorization request.

Defaults to `HS256`. It can be `HS256`, `HS384`, `HS512`, `SHA-256`. `RS256`, `RS384`, or `RS512`. NOTE: `SHA-256` an undocumented legacy value and not continue to be valid. See API docs https://developer.okta.com/docs/reference/api/idps/#oidc-request-signature-algorithm-object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope"></a>

```go
RequestSignatureScope *string
```

- *Type:* *string

Specifies whether to digitally sign an AuthnRequest messages to the IdP.

Defaults to `REQUEST`. It can be `REQUEST` or `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#status IdpOidc#status}

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute"></a>

```go
SubjectMatchAttribute *string
```

- *Type:* *string

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType"></a>

```go
SubjectMatchType *string
```

- *Type:* *string

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#subject_match_type IdpOidc#subject_match_type}

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction"></a>

```go
SuspendedAction *string
```

- *Type:* *string

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#suspended_action IdpOidc#suspended_action}

---

##### `UserInfoBinding`<sup>Optional</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding"></a>

```go
UserInfoBinding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `UserInfoUrl`<sup>Optional</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl"></a>

```go
UserInfoUrl *string
```

- *Type:* *string

Protected resource endpoint that returns claims about the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#user_info_url IdpOidc#user_info_url}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/idp_oidc#username_template IdpOidc#username_template}

---



