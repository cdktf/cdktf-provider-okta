# `okta_policy_profile_enrollment_apps`

Refer to the Terraform Registory for docs: [`okta_policy_profile_enrollment_apps`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps).

# `policyProfileEnrollmentApps` Submodule <a name="`policyProfileEnrollmentApps` Submodule" id="@cdktf/provider-okta.policyProfileEnrollmentApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyProfileEnrollmentApps <a name="PolicyProfileEnrollmentApps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps okta_policy_profile_enrollment_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policyprofileenrollmentapps"

policyprofileenrollmentapps.NewPolicyProfileEnrollmentApps(scope Construct, id *string, config PolicyProfileEnrollmentAppsConfig) PolicyProfileEnrollmentApps
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig">PolicyProfileEnrollmentAppsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig">PolicyProfileEnrollmentAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetApps"></a>

```go
func ResetApps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policyprofileenrollmentapps"

policyprofileenrollmentapps.PolicyProfileEnrollmentApps_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policyprofileenrollmentapps"

policyprofileenrollmentapps.PolicyProfileEnrollmentApps_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policyprofileenrollmentapps"

policyprofileenrollmentapps.PolicyProfileEnrollmentApps_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId">DefaultPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput">AppsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps">Apps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultPolicyId`<sup>Required</sup> <a name="DefaultPolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.defaultPolicyId"></a>

```go
func DefaultPolicyId() *string
```

- *Type:* *string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.appsInput"></a>

```go
func AppsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.apps"></a>

```go
func Apps() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentApps.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyProfileEnrollmentAppsConfig <a name="PolicyProfileEnrollmentAppsConfig" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policyprofileenrollmentapps"

&policyprofileenrollmentapps.PolicyProfileEnrollmentAppsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
	Apps: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | ID of the enrollment policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps">Apps</a></code> | <code>*[]*string</code> | List of app IDs to be added to this policy. |
| <code><a href="#@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

ID of the enrollment policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps#policy_id PolicyProfileEnrollmentApps#policy_id}

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.apps"></a>

```go
Apps *[]*string
```

- *Type:* *[]*string

List of app IDs to be added to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps#apps PolicyProfileEnrollmentApps#apps}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyProfileEnrollmentApps.PolicyProfileEnrollmentAppsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_profile_enrollment_apps#id PolicyProfileEnrollmentApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



