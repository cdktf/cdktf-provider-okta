# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="@cdktf/provider-okta.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="@cdktf/provider-okta.samlIdp.SamlIdp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_idp okta_saml_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/samlidp"

samlidp.NewSamlIdp(scope Construct, id *string, config SamlIdpConfig) SamlIdp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig">SamlIdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig">SamlIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding">ResetAcsBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType">ResetAcsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat">ResetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm">ResetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope">ResetResponseSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding">ResetSsoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination">ResetSsoDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter">ResetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat">ResetSubjectFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlIdp.SamlIdp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction"></a>

```go
func ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude"></a>

```go
func ResetAccountLinkGroupInclude()
```

##### `ResetAcsBinding` <a name="ResetAcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding"></a>

```go
func ResetAcsBinding()
```

##### `ResetAcsType` <a name="ResetAcsType" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType"></a>

```go
func ResetAcsType()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction"></a>

```go
func ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction"></a>

```go
func ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment"></a>

```go
func ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute"></a>

```go
func ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter"></a>

```go
func ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew"></a>

```go
func ResetMaxClockSkew()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat"></a>

```go
func ResetNameFormat()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster"></a>

```go
func ResetProfileMaster()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction"></a>

```go
func ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm"></a>

```go
func ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope"></a>

```go
func ResetRequestSignatureScope()
```

##### `ResetResponseSignatureAlgorithm` <a name="ResetResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm"></a>

```go
func ResetResponseSignatureAlgorithm()
```

##### `ResetResponseSignatureScope` <a name="ResetResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope"></a>

```go
func ResetResponseSignatureScope()
```

##### `ResetSsoBinding` <a name="ResetSsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding"></a>

```go
func ResetSsoBinding()
```

##### `ResetSsoDestination` <a name="ResetSsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination"></a>

```go
func ResetSsoDestination()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectFilter` <a name="ResetSubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter"></a>

```go
func ResetSubjectFilter()
```

##### `ResetSubjectFormat` <a name="ResetSubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat"></a>

```go
func ResetSubjectFormat()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute"></a>

```go
func ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType"></a>

```go
func ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction"></a>

```go
func ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/samlidp"

samlidp.SamlIdp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/samlidp"

samlidp.SamlIdp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/samlidp"

samlidp.SamlIdp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId">UserTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput">AcsBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput">AcsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput">GroupsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput">KidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput">NameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput">ProfileMasterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput">ResponseSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput">ResponseSignatureScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput">SsoBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput">SsoDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput">SubjectFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput">SubjectFormatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding">AcsBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType">AcsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat">NameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding">SsoBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination">SsoDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter">SubjectFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat">SubjectFormat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId"></a>

```go
func UserTypeId() *string
```

- *Type:* *string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput"></a>

```go
func AccountLinkActionInput() *string
```

- *Type:* *string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput"></a>

```go
func AccountLinkGroupIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcsBindingInput`<sup>Optional</sup> <a name="AcsBindingInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput"></a>

```go
func AcsBindingInput() *string
```

- *Type:* *string

---

##### `AcsTypeInput`<sup>Optional</sup> <a name="AcsTypeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput"></a>

```go
func AcsTypeInput() *string
```

- *Type:* *string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput"></a>

```go
func DeprovisionedActionInput() *string
```

- *Type:* *string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput"></a>

```go
func GroupsActionInput() *string
```

- *Type:* *string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput"></a>

```go
func GroupsAssignmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput"></a>

```go
func GroupsAttributeInput() *string
```

- *Type:* *string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput"></a>

```go
func GroupsFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput"></a>

```go
func KidInput() *string
```

- *Type:* *string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput"></a>

```go
func MaxClockSkewInput() *f64
```

- *Type:* *f64

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput"></a>

```go
func NameFormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput"></a>

```go
func ProfileMasterInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput"></a>

```go
func ProvisioningActionInput() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput"></a>

```go
func RequestSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput"></a>

```go
func RequestSignatureScopeInput() *string
```

- *Type:* *string

---

##### `ResponseSignatureAlgorithmInput`<sup>Optional</sup> <a name="ResponseSignatureAlgorithmInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput"></a>

```go
func ResponseSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `ResponseSignatureScopeInput`<sup>Optional</sup> <a name="ResponseSignatureScopeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput"></a>

```go
func ResponseSignatureScopeInput() *string
```

- *Type:* *string

---

##### `SsoBindingInput`<sup>Optional</sup> <a name="SsoBindingInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput"></a>

```go
func SsoBindingInput() *string
```

- *Type:* *string

---

##### `SsoDestinationInput`<sup>Optional</sup> <a name="SsoDestinationInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput"></a>

```go
func SsoDestinationInput() *string
```

- *Type:* *string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectFilterInput`<sup>Optional</sup> <a name="SubjectFilterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput"></a>

```go
func SubjectFilterInput() *string
```

- *Type:* *string

---

##### `SubjectFormatInput`<sup>Optional</sup> <a name="SubjectFormatInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput"></a>

```go
func SubjectFormatInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput"></a>

```go
func SubjectMatchAttributeInput() *string
```

- *Type:* *string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput"></a>

```go
func SubjectMatchTypeInput() *string
```

- *Type:* *string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput"></a>

```go
func SuspendedActionInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction"></a>

```go
func AccountLinkAction() *string
```

- *Type:* *string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude"></a>

```go
func AccountLinkGroupInclude() *[]*string
```

- *Type:* *[]*string

---

##### `AcsBinding`<sup>Required</sup> <a name="AcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding"></a>

```go
func AcsBinding() *string
```

- *Type:* *string

---

##### `AcsType`<sup>Required</sup> <a name="AcsType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType"></a>

```go
func AcsType() *string
```

- *Type:* *string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction"></a>

```go
func DeprovisionedAction() *string
```

- *Type:* *string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction"></a>

```go
func GroupsAction() *string
```

- *Type:* *string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment"></a>

```go
func GroupsAssignment() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute"></a>

```go
func GroupsAttribute() *string
```

- *Type:* *string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter"></a>

```go
func GroupsFilter() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew"></a>

```go
func MaxClockSkew() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat"></a>

```go
func NameFormat() *string
```

- *Type:* *string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster"></a>

```go
func ProfileMaster() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction"></a>

```go
func ProvisioningAction() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm"></a>

```go
func RequestSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope"></a>

```go
func RequestSignatureScope() *string
```

- *Type:* *string

---

##### `ResponseSignatureAlgorithm`<sup>Required</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm"></a>

```go
func ResponseSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `ResponseSignatureScope`<sup>Required</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope"></a>

```go
func ResponseSignatureScope() *string
```

- *Type:* *string

---

##### `SsoBinding`<sup>Required</sup> <a name="SsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding"></a>

```go
func SsoBinding() *string
```

- *Type:* *string

---

##### `SsoDestination`<sup>Required</sup> <a name="SsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination"></a>

```go
func SsoDestination() *string
```

- *Type:* *string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter"></a>

```go
func SubjectFilter() *string
```

- *Type:* *string

---

##### `SubjectFormat`<sup>Required</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat"></a>

```go
func SubjectFormat() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute"></a>

```go
func SubjectMatchAttribute() *string
```

- *Type:* *string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType"></a>

```go
func SubjectMatchType() *string
```

- *Type:* *string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction"></a>

```go
func SuspendedAction() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/samlidp"

&samlidp.SamlIdpConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Issuer: *string,
	Kid: *string,
	Name: *string,
	SsoUrl: *string,
	AccountLinkAction: *string,
	AccountLinkGroupInclude: *[]*string,
	AcsBinding: *string,
	AcsType: *string,
	DeprovisionedAction: *string,
	GroupsAction: *string,
	GroupsAssignment: *[]*string,
	GroupsAttribute: *string,
	GroupsFilter: *[]*string,
	Id: *string,
	IssuerMode: *string,
	MaxClockSkew: *f64,
	NameFormat: *string,
	ProfileMaster: interface{},
	ProvisioningAction: *string,
	RequestSignatureAlgorithm: *string,
	RequestSignatureScope: *string,
	ResponseSignatureAlgorithm: *string,
	ResponseSignatureScope: *string,
	SsoBinding: *string,
	SsoDestination: *string,
	Status: *string,
	SubjectFilter: *string,
	SubjectFormat: *[]*string,
	SubjectMatchAttribute: *string,
	SubjectMatchType: *string,
	SuspendedAction: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid">Kid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name">Name</a></code> | <code>*string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding">AcsBinding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType">AcsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat">NameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>*string</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>*string</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding">SsoBinding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination">SsoDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter">SubjectFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat">SubjectFormat</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer SamlIdp#issuer}.

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid"></a>

```go
Kid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#kid SamlIdp#kid}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name SamlIdp#name}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_url SamlIdp#sso_url}.

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction"></a>

```go
AccountLinkAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_action SamlIdp#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude"></a>

```go
AccountLinkGroupInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#account_link_group_include SamlIdp#account_link_group_include}.

---

##### `AcsBinding`<sup>Optional</sup> <a name="AcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding"></a>

```go
AcsBinding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_binding SamlIdp#acs_binding}.

---

##### `AcsType`<sup>Optional</sup> <a name="AcsType" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType"></a>

```go
AcsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#acs_type SamlIdp#acs_type}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction"></a>

```go
DeprovisionedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction"></a>

```go
GroupsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_action SamlIdp#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment"></a>

```go
GroupsAssignment *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_assignment SamlIdp#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute"></a>

```go
GroupsAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_attribute SamlIdp#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter"></a>

```go
GroupsFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#groups_filter SamlIdp#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#id SamlIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#issuer_mode SamlIdp#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew"></a>

```go
MaxClockSkew *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#max_clock_skew SamlIdp#max_clock_skew}.

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat"></a>

```go
NameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#name_format SamlIdp#name_format}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster"></a>

```go
ProfileMaster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#profile_master SamlIdp#profile_master}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction"></a>

```go
ProvisioningAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#provisioning_action SamlIdp#provisioning_action}.

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm"></a>

```go
RequestSignatureAlgorithm *string
```

- *Type:* *string

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_algorithm SamlIdp#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope"></a>

```go
RequestSignatureScope *string
```

- *Type:* *string

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#request_signature_scope SamlIdp#request_signature_scope}

---

##### `ResponseSignatureAlgorithm`<sup>Optional</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm"></a>

```go
ResponseSignatureAlgorithm *string
```

- *Type:* *string

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_algorithm SamlIdp#response_signature_algorithm}

---

##### `ResponseSignatureScope`<sup>Optional</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope"></a>

```go
ResponseSignatureScope *string
```

- *Type:* *string

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#response_signature_scope SamlIdp#response_signature_scope}

---

##### `SsoBinding`<sup>Optional</sup> <a name="SsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding"></a>

```go
SsoBinding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_binding SamlIdp#sso_binding}.

---

##### `SsoDestination`<sup>Optional</sup> <a name="SsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination"></a>

```go
SsoDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#sso_destination SamlIdp#sso_destination}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#status SamlIdp#status}.

---

##### `SubjectFilter`<sup>Optional</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter"></a>

```go
SubjectFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_filter SamlIdp#subject_filter}.

---

##### `SubjectFormat`<sup>Optional</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat"></a>

```go
SubjectFormat *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_format SamlIdp#subject_format}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute"></a>

```go
SubjectMatchAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType"></a>

```go
SubjectMatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#subject_match_type SamlIdp#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction"></a>

```go
SuspendedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#suspended_action SamlIdp#suspended_action}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp#username_template SamlIdp#username_template}.

---


