# `authServerPolicyRule` Submodule <a name="`authServerPolicyRule` Submodule" id="@cdktf/provider-okta.authServerPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicyRule <a name="AuthServerPolicyRule" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule okta_auth_server_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

authserverpolicyrule.NewAuthServerPolicyRule(scope Construct, id *string, config AuthServerPolicyRuleConfig) AuthServerPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig">AuthServerPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig">AuthServerPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes">ResetAccessTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist">ResetGroupBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist">ResetGroupWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes">ResetRefreshTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes">ResetRefreshTokenWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist">ResetScopeWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist">ResetUserBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist">ResetUserWhitelist</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessTokenLifetimeMinutes` <a name="ResetAccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes"></a>

```go
func ResetAccessTokenLifetimeMinutes()
```

##### `ResetGroupBlacklist` <a name="ResetGroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist"></a>

```go
func ResetGroupBlacklist()
```

##### `ResetGroupWhitelist` <a name="ResetGroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist"></a>

```go
func ResetGroupWhitelist()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId"></a>

```go
func ResetInlineHookId()
```

##### `ResetRefreshTokenLifetimeMinutes` <a name="ResetRefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes"></a>

```go
func ResetRefreshTokenLifetimeMinutes()
```

##### `ResetRefreshTokenWindowMinutes` <a name="ResetRefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes"></a>

```go
func ResetRefreshTokenWindowMinutes()
```

##### `ResetScopeWhitelist` <a name="ResetScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist"></a>

```go
func ResetScopeWhitelist()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType"></a>

```go
func ResetType()
```

##### `ResetUserBlacklist` <a name="ResetUserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist"></a>

```go
func ResetUserBlacklist()
```

##### `ResetUserWhitelist` <a name="ResetUserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist"></a>

```go
func ResetUserWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

authserverpolicyrule.AuthServerPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

authserverpolicyrule.AuthServerPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

authserverpolicyrule.AuthServerPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

authserverpolicyrule.AuthServerPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthServerPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthServerPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput">AccessTokenLifetimeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput">AuthServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput">GrantTypeWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput">GroupBlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput">GroupWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput">RefreshTokenLifetimeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput">RefreshTokenWindowMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput">ScopeWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput">UserBlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput">UserWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes">AccessTokenLifetimeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId">AuthServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist">GrantTypeWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist">GroupBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist">GroupWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes">RefreshTokenLifetimeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes">RefreshTokenWindowMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist">ScopeWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist">UserBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist">UserWhitelist</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AccessTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="AccessTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput"></a>

```go
func AccessTokenLifetimeMinutesInput() *f64
```

- *Type:* *f64

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput"></a>

```go
func AuthServerIdInput() *string
```

- *Type:* *string

---

##### `GrantTypeWhitelistInput`<sup>Optional</sup> <a name="GrantTypeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput"></a>

```go
func GrantTypeWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupBlacklistInput`<sup>Optional</sup> <a name="GroupBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput"></a>

```go
func GroupBlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupWhitelistInput`<sup>Optional</sup> <a name="GroupWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput"></a>

```go
func GroupWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput"></a>

```go
func InlineHookIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="RefreshTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput"></a>

```go
func RefreshTokenLifetimeMinutesInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenWindowMinutesInput`<sup>Optional</sup> <a name="RefreshTokenWindowMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput"></a>

```go
func RefreshTokenWindowMinutesInput() *f64
```

- *Type:* *f64

---

##### `ScopeWhitelistInput`<sup>Optional</sup> <a name="ScopeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput"></a>

```go
func ScopeWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserBlacklistInput`<sup>Optional</sup> <a name="UserBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput"></a>

```go
func UserBlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserWhitelistInput`<sup>Optional</sup> <a name="UserWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput"></a>

```go
func UserWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokenLifetimeMinutes`<sup>Required</sup> <a name="AccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes"></a>

```go
func AccessTokenLifetimeMinutes() *f64
```

- *Type:* *f64

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId"></a>

```go
func AuthServerId() *string
```

- *Type:* *string

---

##### `GrantTypeWhitelist`<sup>Required</sup> <a name="GrantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist"></a>

```go
func GrantTypeWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `GroupBlacklist`<sup>Required</sup> <a name="GroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist"></a>

```go
func GroupBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `GroupWhitelist`<sup>Required</sup> <a name="GroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist"></a>

```go
func GroupWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId"></a>

```go
func InlineHookId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RefreshTokenLifetimeMinutes`<sup>Required</sup> <a name="RefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes"></a>

```go
func RefreshTokenLifetimeMinutes() *f64
```

- *Type:* *f64

---

##### `RefreshTokenWindowMinutes`<sup>Required</sup> <a name="RefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes"></a>

```go
func RefreshTokenWindowMinutes() *f64
```

- *Type:* *f64

---

##### `ScopeWhitelist`<sup>Required</sup> <a name="ScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist"></a>

```go
func ScopeWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserBlacklist`<sup>Required</sup> <a name="UserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist"></a>

```go
func UserBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `UserWhitelist`<sup>Required</sup> <a name="UserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist"></a>

```go
func UserWhitelist() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyRuleConfig <a name="AuthServerPolicyRuleConfig" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverpolicyrule"

&authserverpolicyrule.AuthServerPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthServerId: *string,
	GrantTypeWhitelist: *[]*string,
	Name: *string,
	PolicyId: *string,
	Priority: *f64,
	AccessTokenLifetimeMinutes: *f64,
	GroupBlacklist: *[]*string,
	GroupWhitelist: *[]*string,
	Id: *string,
	InlineHookId: *string,
	RefreshTokenLifetimeMinutes: *f64,
	RefreshTokenWindowMinutes: *f64,
	ScopeWhitelist: *[]*string,
	Status: *string,
	Type: *string,
	UserBlacklist: *[]*string,
	UserWhitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId">AuthServerId</a></code> | <code>*string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist">GrantTypeWhitelist</a></code> | <code>*[]*string</code> | Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*). |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes">AccessTokenLifetimeMinutes</a></code> | <code>*f64</code> | Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist">GroupBlacklist</a></code> | <code>*[]*string</code> | Specifies a set of Groups whose Users are to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist">GroupWhitelist</a></code> | <code>*[]*string</code> | Specifies a set of Groups whose Users are to be included. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | The ID of the inline token to trigger. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes">RefreshTokenLifetimeMinutes</a></code> | <code>*f64</code> | Lifetime of refresh token. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes">RefreshTokenWindowMinutes</a></code> | <code>*f64</code> | Window in which a refresh token can be used. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist">ScopeWhitelist</a></code> | <code>*[]*string</code> | Scopes allowed for this policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status">Status</a></code> | <code>*string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type">Type</a></code> | <code>*string</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist">UserBlacklist</a></code> | <code>*[]*string</code> | Specifies a set of Users to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist">UserWhitelist</a></code> | <code>*[]*string</code> | Specifies a set of Users to be included. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId"></a>

```go
AuthServerId *string
```

- *Type:* *string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `GrantTypeWhitelist`<sup>Required</sup> <a name="GrantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist"></a>

```go
GrantTypeWhitelist *[]*string
```

- *Type:* *[]*string

Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*).

For `implicit` value either `user_whitelist` or `group_whitelist` should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `AccessTokenLifetimeMinutes`<sup>Optional</sup> <a name="AccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes"></a>

```go
AccessTokenLifetimeMinutes *f64
```

- *Type:* *f64

Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}

---

##### `GroupBlacklist`<sup>Optional</sup> <a name="GroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist"></a>

```go
GroupBlacklist *[]*string
```

- *Type:* *[]*string

Specifies a set of Groups whose Users are to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}

---

##### `GroupWhitelist`<sup>Optional</sup> <a name="GroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist"></a>

```go
GroupWhitelist *[]*string
```

- *Type:* *[]*string

Specifies a set of Groups whose Users are to be included.

Can be set to Group ID or to the following: `EVERYONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId"></a>

```go
InlineHookId *string
```

- *Type:* *string

The ID of the inline token to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}

---

##### `RefreshTokenLifetimeMinutes`<sup>Optional</sup> <a name="RefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes"></a>

```go
RefreshTokenLifetimeMinutes *f64
```

- *Type:* *f64

Lifetime of refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}

---

##### `RefreshTokenWindowMinutes`<sup>Optional</sup> <a name="RefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes"></a>

```go
RefreshTokenWindowMinutes *f64
```

- *Type:* *f64

Window in which a refresh token can be used.

It can be a value between 5 and 2628000 (5 years) minutes. Default is `10080` (7 days).`refresh_token_window_minutes` must be between `access_token_lifetime_minutes` and `refresh_token_lifetime_minutes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}

---

##### `ScopeWhitelist`<sup>Optional</sup> <a name="ScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist"></a>

```go
ScopeWhitelist *[]*string
```

- *Type:* *[]*string

Scopes allowed for this policy rule.

They can be whitelisted by name or all can be whitelisted with `*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `UserBlacklist`<sup>Optional</sup> <a name="UserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist"></a>

```go
UserBlacklist *[]*string
```

- *Type:* *[]*string

Specifies a set of Users to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}

---

##### `UserWhitelist`<sup>Optional</sup> <a name="UserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist"></a>

```go
UserWhitelist *[]*string
```

- *Type:* *[]*string

Specifies a set of Users to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}

---



