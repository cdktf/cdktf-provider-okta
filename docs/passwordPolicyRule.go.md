# `okta_password_policy_rule`

Refer to the Terraform Registory for docs: [`okta_password_policy_rule`](https://www.terraform.io/docs/providers/okta/r/password_policy_rule).

# `passwordPolicyRule` Submodule <a name="`passwordPolicyRule` Submodule" id="@cdktf/provider-okta.passwordPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicyRule <a name="PasswordPolicyRule" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule okta_password_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/passwordpolicyrule"

passwordpolicyrule.NewPasswordPolicyRule(scope Construct, id *string, config PasswordPolicyRuleConfig) PasswordPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange">ResetPasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset">ResetPasswordReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock">ResetPasswordUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid">ResetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPasswordChange` <a name="ResetPasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange"></a>

```go
func ResetPasswordChange()
```

##### `ResetPasswordReset` <a name="ResetPasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset"></a>

```go
func ResetPasswordReset()
```

##### `ResetPasswordUnlock` <a name="ResetPasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock"></a>

```go
func ResetPasswordUnlock()
```

##### `ResetPolicyid` <a name="ResetPolicyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid"></a>

```go
func ResetPolicyid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/passwordpolicyrule"

passwordpolicyrule.PasswordPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/passwordpolicyrule"

passwordpolicyrule.PasswordPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/passwordpolicyrule"

passwordpolicyrule.PasswordPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput">PasswordChangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput">PasswordResetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput">PasswordUnlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput">PolicyidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange">PasswordChange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset">PasswordReset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock">PasswordUnlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid">Policyid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordChangeInput`<sup>Optional</sup> <a name="PasswordChangeInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput"></a>

```go
func PasswordChangeInput() *string
```

- *Type:* *string

---

##### `PasswordResetInput`<sup>Optional</sup> <a name="PasswordResetInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput"></a>

```go
func PasswordResetInput() *string
```

- *Type:* *string

---

##### `PasswordUnlockInput`<sup>Optional</sup> <a name="PasswordUnlockInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput"></a>

```go
func PasswordUnlockInput() *string
```

- *Type:* *string

---

##### `PolicyidInput`<sup>Optional</sup> <a name="PolicyidInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput"></a>

```go
func PolicyidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordChange`<sup>Required</sup> <a name="PasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange"></a>

```go
func PasswordChange() *string
```

- *Type:* *string

---

##### `PasswordReset`<sup>Required</sup> <a name="PasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset"></a>

```go
func PasswordReset() *string
```

- *Type:* *string

---

##### `PasswordUnlock`<sup>Required</sup> <a name="PasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock"></a>

```go
func PasswordUnlock() *string
```

- *Type:* *string

---

##### `Policyid`<sup>Required</sup> <a name="Policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid"></a>

```go
func Policyid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyRuleConfig <a name="PasswordPolicyRuleConfig" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/passwordpolicyrule"

&passwordpolicyrule.PasswordPolicyRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	NetworkConnection: *string,
	NetworkExcludes: *[]*string,
	NetworkIncludes: *[]*string,
	PasswordChange: *string,
	PasswordReset: *string,
	PasswordUnlock: *string,
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
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange">PasswordChange</a></code> | <code>*string</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset">PasswordReset</a></code> | <code>*string</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock">PasswordUnlock</a></code> | <code>*string</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid">Policyid</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#name PasswordPolicyRule#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_connection PasswordPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_excludes PasswordPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_includes PasswordPolicyRule#network_includes}

---

##### `PasswordChange`<sup>Optional</sup> <a name="PasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange"></a>

```go
PasswordChange *string
```

- *Type:* *string

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_change PasswordPolicyRule#password_change}

---

##### `PasswordReset`<sup>Optional</sup> <a name="PasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset"></a>

```go
PasswordReset *string
```

- *Type:* *string

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_reset PasswordPolicyRule#password_reset}

---

##### `PasswordUnlock`<sup>Optional</sup> <a name="PasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock"></a>

```go
PasswordUnlock *string
```

- *Type:* *string

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_unlock PasswordPolicyRule#password_unlock}

---

##### `Policyid`<sup>Optional</sup> <a name="Policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid"></a>

```go
Policyid *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policyid PasswordPolicyRule#policyid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policy_id PasswordPolicyRule#policy_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#priority PasswordPolicyRule#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#status PasswordPolicyRule#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#users_excluded PasswordPolicyRule#users_excluded}

---



