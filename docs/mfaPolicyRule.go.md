# `okta_mfa_policy_rule`

Refer to the Terraform Registory for docs: [`okta_mfa_policy_rule`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule).

# `mfaPolicyRule` Submodule <a name="`mfaPolicyRule` Submodule" id="@cdktf/provider-okta.mfaPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicyRule <a name="MfaPolicyRule" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule okta_mfa_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.NewMfaPolicyRule(scope Construct, id *string, config MfaPolicyRuleConfig) MfaPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig">MfaPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig">MfaPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude">PutAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude">PutAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude">ResetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude">ResetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll">ResetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid">ResetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAppExclude` <a name="PutAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude"></a>

```go
func PutAppExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAppInclude` <a name="PutAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude"></a>

```go
func PutAppInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppExclude` <a name="ResetAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude"></a>

```go
func ResetAppExclude()
```

##### `ResetAppInclude` <a name="ResetAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude"></a>

```go
func ResetAppInclude()
```

##### `ResetEnroll` <a name="ResetEnroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll"></a>

```go
func ResetEnroll()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPolicyid` <a name="ResetPolicyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid"></a>

```go
func ResetPolicyid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.MfaPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.MfaPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.MfaPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude">AppExclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude">AppInclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput">AppExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput">AppIncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput">EnrollInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput">PolicyidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll">Enroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid">Policyid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppExclude`<sup>Required</sup> <a name="AppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude"></a>

```go
func AppExclude() MfaPolicyRuleAppExcludeList
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a>

---

##### `AppInclude`<sup>Required</sup> <a name="AppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude"></a>

```go
func AppInclude() MfaPolicyRuleAppIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a>

---

##### `AppExcludeInput`<sup>Optional</sup> <a name="AppExcludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput"></a>

```go
func AppExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `AppIncludeInput`<sup>Optional</sup> <a name="AppIncludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput"></a>

```go
func AppIncludeInput() interface{}
```

- *Type:* interface{}

---

##### `EnrollInput`<sup>Optional</sup> <a name="EnrollInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput"></a>

```go
func EnrollInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyidInput`<sup>Optional</sup> <a name="PolicyidInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput"></a>

```go
func PolicyidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enroll`<sup>Required</sup> <a name="Enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll"></a>

```go
func Enroll() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `Policyid`<sup>Required</sup> <a name="Policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid"></a>

```go
func Policyid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyRuleAppExclude <a name="MfaPolicyRuleAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

&mfapolicyrule.MfaPolicyRuleAppExclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleAppInclude <a name="MfaPolicyRuleAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

&mfapolicyrule.MfaPolicyRuleAppInclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleConfig <a name="MfaPolicyRuleConfig" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

&mfapolicyrule.MfaPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppExclude: interface{},
	AppInclude: interface{},
	Enroll: *string,
	Id: *string,
	NetworkConnection: *string,
	NetworkExcludes: *[]*string,
	NetworkIncludes: *[]*string,
	Policyid: *string,
	PolicyId: *string,
	Priority: *f64,
	Status: *string,
	UsersExcluded: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude">AppExclude</a></code> | <code>interface{}</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude">AppInclude</a></code> | <code>interface{}</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll">Enroll</a></code> | <code>*string</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid">Policyid</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#name MfaPolicyRule#name}

---

##### `AppExclude`<sup>Optional</sup> <a name="AppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude"></a>

```go
AppExclude interface{}
```

- *Type:* interface{}

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#app_exclude MfaPolicyRule#app_exclude}

---

##### `AppInclude`<sup>Optional</sup> <a name="AppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude"></a>

```go
AppInclude interface{}
```

- *Type:* interface{}

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#app_include MfaPolicyRule#app_include}

---

##### `Enroll`<sup>Optional</sup> <a name="Enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll"></a>

```go
Enroll *string
```

- *Type:* *string

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#enroll MfaPolicyRule#enroll}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_connection MfaPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_excludes MfaPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#network_includes MfaPolicyRule#network_includes}

---

##### `Policyid`<sup>Optional</sup> <a name="Policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid"></a>

```go
Policyid *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#policyid MfaPolicyRule#policyid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#policy_id MfaPolicyRule#policy_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#priority MfaPolicyRule#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#status MfaPolicyRule#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy_rule#users_excluded MfaPolicyRule#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### MfaPolicyRuleAppExcludeList <a name="MfaPolicyRuleAppExcludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.NewMfaPolicyRuleAppExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MfaPolicyRuleAppExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get"></a>

```go
func Get(index *f64) MfaPolicyRuleAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MfaPolicyRuleAppExcludeOutputReference <a name="MfaPolicyRuleAppExcludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.NewMfaPolicyRuleAppExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MfaPolicyRuleAppExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MfaPolicyRuleAppIncludeList <a name="MfaPolicyRuleAppIncludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.NewMfaPolicyRuleAppIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MfaPolicyRuleAppIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get"></a>

```go
func Get(index *f64) MfaPolicyRuleAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MfaPolicyRuleAppIncludeOutputReference <a name="MfaPolicyRuleAppIncludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicyrule"

mfapolicyrule.NewMfaPolicyRuleAppIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MfaPolicyRuleAppIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



