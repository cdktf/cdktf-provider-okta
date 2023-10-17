# `okta_idp_saml`

Refer to the Terraform Registory for docs: [`okta_idp_saml`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml).

# `idpSaml` Submodule <a name="`idpSaml` Submodule" id="@cdktf/provider-okta.idpSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSaml <a name="IdpSaml" id="@cdktf/provider-okta.idpSaml.IdpSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml okta_idp_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/idpsaml"

idpsaml.NewIdpSaml(scope Construct, id *string, config IdpSamlConfig) IdpSaml
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig">IdpSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig">IdpSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType">ResetAcsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat">ResetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm">ResetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope">ResetResponseSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding">ResetSsoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination">ResetSsoDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter">ResetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat">ResetSubjectFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idpSaml.IdpSaml.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction"></a>

```go
func ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude"></a>

```go
func ResetAccountLinkGroupInclude()
```

##### `ResetAcsType` <a name="ResetAcsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType"></a>

```go
func ResetAcsType()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction"></a>

```go
func ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction"></a>

```go
func ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment"></a>

```go
func ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute"></a>

```go
func ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter"></a>

```go
func ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew"></a>

```go
func ResetMaxClockSkew()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat"></a>

```go
func ResetNameFormat()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster"></a>

```go
func ResetProfileMaster()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction"></a>

```go
func ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm"></a>

```go
func ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope"></a>

```go
func ResetRequestSignatureScope()
```

##### `ResetResponseSignatureAlgorithm` <a name="ResetResponseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm"></a>

```go
func ResetResponseSignatureAlgorithm()
```

##### `ResetResponseSignatureScope` <a name="ResetResponseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope"></a>

```go
func ResetResponseSignatureScope()
```

##### `ResetSsoBinding` <a name="ResetSsoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding"></a>

```go
func ResetSsoBinding()
```

##### `ResetSsoDestination` <a name="ResetSsoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination"></a>

```go
func ResetSsoDestination()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectFilter` <a name="ResetSubjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter"></a>

```go
func ResetSubjectFilter()
```

##### `ResetSubjectFormat` <a name="ResetSubjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat"></a>

```go
func ResetSubjectFormat()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute"></a>

```go
func ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType"></a>

```go
func ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction"></a>

```go
func ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/idpsaml"

idpsaml.IdpSaml_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/idpsaml"

idpsaml.IdpSaml_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/idpsaml"

idpsaml.IdpSaml_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding">AcsBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId">UserTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput">AcsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput">GroupsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput">KidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput">NameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput">ProfileMasterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput">ResponseSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput">ResponseSignatureScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput">SsoBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput">SsoDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput">SubjectFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput">SubjectFormatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType">AcsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat">NameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding">SsoBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination">SsoDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter">SubjectFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat">SubjectFormat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcsBinding`<sup>Required</sup> <a name="AcsBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding"></a>

```go
func AcsBinding() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId"></a>

```go
func UserTypeId() *string
```

- *Type:* *string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput"></a>

```go
func AccountLinkActionInput() *string
```

- *Type:* *string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput"></a>

```go
func AccountLinkGroupIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcsTypeInput`<sup>Optional</sup> <a name="AcsTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput"></a>

```go
func AcsTypeInput() *string
```

- *Type:* *string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput"></a>

```go
func DeprovisionedActionInput() *string
```

- *Type:* *string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput"></a>

```go
func GroupsActionInput() *string
```

- *Type:* *string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput"></a>

```go
func GroupsAssignmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput"></a>

```go
func GroupsAttributeInput() *string
```

- *Type:* *string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput"></a>

```go
func GroupsFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput"></a>

```go
func KidInput() *string
```

- *Type:* *string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput"></a>

```go
func MaxClockSkewInput() *f64
```

- *Type:* *f64

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput"></a>

```go
func NameFormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput"></a>

```go
func ProfileMasterInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput"></a>

```go
func ProvisioningActionInput() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput"></a>

```go
func RequestSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput"></a>

```go
func RequestSignatureScopeInput() *string
```

- *Type:* *string

---

##### `ResponseSignatureAlgorithmInput`<sup>Optional</sup> <a name="ResponseSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput"></a>

```go
func ResponseSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `ResponseSignatureScopeInput`<sup>Optional</sup> <a name="ResponseSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput"></a>

```go
func ResponseSignatureScopeInput() *string
```

- *Type:* *string

---

##### `SsoBindingInput`<sup>Optional</sup> <a name="SsoBindingInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput"></a>

```go
func SsoBindingInput() *string
```

- *Type:* *string

---

##### `SsoDestinationInput`<sup>Optional</sup> <a name="SsoDestinationInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput"></a>

```go
func SsoDestinationInput() *string
```

- *Type:* *string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectFilterInput`<sup>Optional</sup> <a name="SubjectFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput"></a>

```go
func SubjectFilterInput() *string
```

- *Type:* *string

---

##### `SubjectFormatInput`<sup>Optional</sup> <a name="SubjectFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput"></a>

```go
func SubjectFormatInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput"></a>

```go
func SubjectMatchAttributeInput() *string
```

- *Type:* *string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput"></a>

```go
func SubjectMatchTypeInput() *string
```

- *Type:* *string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput"></a>

```go
func SuspendedActionInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction"></a>

```go
func AccountLinkAction() *string
```

- *Type:* *string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude"></a>

```go
func AccountLinkGroupInclude() *[]*string
```

- *Type:* *[]*string

---

##### `AcsType`<sup>Required</sup> <a name="AcsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType"></a>

```go
func AcsType() *string
```

- *Type:* *string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction"></a>

```go
func DeprovisionedAction() *string
```

- *Type:* *string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction"></a>

```go
func GroupsAction() *string
```

- *Type:* *string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment"></a>

```go
func GroupsAssignment() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute"></a>

```go
func GroupsAttribute() *string
```

- *Type:* *string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter"></a>

```go
func GroupsFilter() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew"></a>

```go
func MaxClockSkew() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat"></a>

```go
func NameFormat() *string
```

- *Type:* *string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster"></a>

```go
func ProfileMaster() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction"></a>

```go
func ProvisioningAction() *string
```

- *Type:* *string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm"></a>

```go
func RequestSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope"></a>

```go
func RequestSignatureScope() *string
```

- *Type:* *string

---

##### `ResponseSignatureAlgorithm`<sup>Required</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm"></a>

```go
func ResponseSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `ResponseSignatureScope`<sup>Required</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope"></a>

```go
func ResponseSignatureScope() *string
```

- *Type:* *string

---

##### `SsoBinding`<sup>Required</sup> <a name="SsoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding"></a>

```go
func SsoBinding() *string
```

- *Type:* *string

---

##### `SsoDestination`<sup>Required</sup> <a name="SsoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination"></a>

```go
func SsoDestination() *string
```

- *Type:* *string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter"></a>

```go
func SubjectFilter() *string
```

- *Type:* *string

---

##### `SubjectFormat`<sup>Required</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat"></a>

```go
func SubjectFormat() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute"></a>

```go
func SubjectMatchAttribute() *string
```

- *Type:* *string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType"></a>

```go
func SubjectMatchType() *string
```

- *Type:* *string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction"></a>

```go
func SuspendedAction() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSamlConfig <a name="IdpSamlConfig" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/idpsaml"

&idpsaml.IdpSamlConfig {
	Connection: interface{},
	Count: interface{},
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
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#issuer IdpSaml#issuer}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid">Kid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#kid IdpSaml#kid}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name">Name</a></code> | <code>*string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType">AcsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat">NameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#name_format IdpSaml#name_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>*string</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>*string</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>*string</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>*string</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding">SsoBinding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination">SsoDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#status IdpSaml#status}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter">SubjectFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat">SubjectFormat</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#username_template IdpSaml#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#issuer IdpSaml#issuer}.

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid"></a>

```go
Kid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#kid IdpSaml#kid}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#name IdpSaml#name}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_url IdpSaml#sso_url}.

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction"></a>

```go
AccountLinkAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude"></a>

```go
AccountLinkGroupInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}.

---

##### `AcsType`<sup>Optional</sup> <a name="AcsType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType"></a>

```go
AcsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#acs_type IdpSaml#acs_type}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction"></a>

```go
DeprovisionedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction"></a>

```go
GroupsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_action IdpSaml#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment"></a>

```go
GroupsAssignment *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute"></a>

```go
GroupsAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter"></a>

```go
GroupsFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew"></a>

```go
MaxClockSkew *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}.

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat"></a>

```go
NameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#name_format IdpSaml#name_format}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster"></a>

```go
ProfileMaster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#profile_master IdpSaml#profile_master}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction"></a>

```go
ProvisioningAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}.

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm"></a>

```go
RequestSignatureAlgorithm *string
```

- *Type:* *string

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope"></a>

```go
RequestSignatureScope *string
```

- *Type:* *string

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `ResponseSignatureAlgorithm`<sup>Optional</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm"></a>

```go
ResponseSignatureAlgorithm *string
```

- *Type:* *string

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `ResponseSignatureScope`<sup>Optional</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope"></a>

```go
ResponseSignatureScope *string
```

- *Type:* *string

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `SsoBinding`<sup>Optional</sup> <a name="SsoBinding" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding"></a>

```go
SsoBinding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}.

---

##### `SsoDestination`<sup>Optional</sup> <a name="SsoDestination" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination"></a>

```go
SsoDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#status IdpSaml#status}.

---

##### `SubjectFilter`<sup>Optional</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter"></a>

```go
SubjectFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}.

---

##### `SubjectFormat`<sup>Optional</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat"></a>

```go
SubjectFormat *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_format IdpSaml#subject_format}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute"></a>

```go
SubjectMatchAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType"></a>

```go
SubjectMatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction"></a>

```go
SuspendedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/idp_saml#username_template IdpSaml#username_template}.

---



