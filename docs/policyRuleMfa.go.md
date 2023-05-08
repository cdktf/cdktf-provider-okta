# `okta_policy_rule_mfa`

Refer to the Terraform Registory for docs: [`okta_policy_rule_mfa`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa).

# `policyRuleMfa` Submodule <a name="`policyRuleMfa` Submodule" id="@cdktf/provider-okta.policyRuleMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleMfa <a name="PolicyRuleMfa" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa okta_policy_rule_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.NewPolicyRuleMfa(scope Construct, id *string, config PolicyRuleMfaConfig) PolicyRuleMfa
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig">PolicyRuleMfaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig">PolicyRuleMfaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude">PutAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude">PutAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude">ResetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude">ResetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll">ResetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyid">ResetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAppExclude` <a name="PutAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude"></a>

```go
func PutAppExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAppInclude` <a name="PutAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude"></a>

```go
func PutAppInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppExclude` <a name="ResetAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude"></a>

```go
func ResetAppExclude()
```

##### `ResetAppInclude` <a name="ResetAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude"></a>

```go
func ResetAppInclude()
```

##### `ResetEnroll` <a name="ResetEnroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll"></a>

```go
func ResetEnroll()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPolicyid` <a name="ResetPolicyid" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyid"></a>

```go
func ResetPolicyid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.PolicyRuleMfa_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.PolicyRuleMfa_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.PolicyRuleMfa_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude">AppExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude">AppInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput">AppExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput">AppIncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput">EnrollInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyidInput">PolicyidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll">Enroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyid">Policyid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppExclude`<sup>Required</sup> <a name="AppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude"></a>

```go
func AppExclude() PolicyRuleMfaAppExcludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a>

---

##### `AppInclude`<sup>Required</sup> <a name="AppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude"></a>

```go
func AppInclude() PolicyRuleMfaAppIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a>

---

##### `AppExcludeInput`<sup>Optional</sup> <a name="AppExcludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput"></a>

```go
func AppExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `AppIncludeInput`<sup>Optional</sup> <a name="AppIncludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput"></a>

```go
func AppIncludeInput() interface{}
```

- *Type:* interface{}

---

##### `EnrollInput`<sup>Optional</sup> <a name="EnrollInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput"></a>

```go
func EnrollInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyidInput`<sup>Optional</sup> <a name="PolicyidInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyidInput"></a>

```go
func PolicyidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enroll`<sup>Required</sup> <a name="Enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll"></a>

```go
func Enroll() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `Policyid`<sup>Required</sup> <a name="Policyid" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyid"></a>

```go
func Policyid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleMfaAppExclude <a name="PolicyRuleMfaAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

&policyrulemfa.PolicyRuleMfaAppExclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaAppInclude <a name="PolicyRuleMfaAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

&policyrulemfa.PolicyRuleMfaAppInclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaConfig <a name="PolicyRuleMfaConfig" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

&policyrulemfa.PolicyRuleMfaConfig {
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
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude">AppExclude</a></code> | <code>interface{}</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude">AppInclude</a></code> | <code>interface{}</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll">Enroll</a></code> | <code>*string</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyid">Policyid</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `AppExclude`<sup>Optional</sup> <a name="AppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude"></a>

```go
AppExclude interface{}
```

- *Type:* interface{}

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `AppInclude`<sup>Optional</sup> <a name="AppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude"></a>

```go
AppInclude interface{}
```

- *Type:* interface{}

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `Enroll`<sup>Optional</sup> <a name="Enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll"></a>

```go
Enroll *string
```

- *Type:* *string

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `Policyid`<sup>Optional</sup> <a name="Policyid" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyid"></a>

```go
Policyid *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#policyid PolicyRuleMfa#policyid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleMfaAppExcludeList <a name="PolicyRuleMfaAppExcludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.NewPolicyRuleMfaAppExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleMfaAppExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get"></a>

```go
func Get(index *f64) PolicyRuleMfaAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleMfaAppExcludeOutputReference <a name="PolicyRuleMfaAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.NewPolicyRuleMfaAppExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleMfaAppExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleMfaAppIncludeList <a name="PolicyRuleMfaAppIncludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.NewPolicyRuleMfaAppIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleMfaAppIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get"></a>

```go
func Get(index *f64) PolicyRuleMfaAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleMfaAppIncludeOutputReference <a name="PolicyRuleMfaAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyrulemfa"

policyrulemfa.NewPolicyRuleMfaAppIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleMfaAppIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



