# `appSignonPolicyRule` Submodule <a name="`appSignonPolicyRule` Submodule" id="@cdktf/provider-okta.appSignonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSignonPolicyRule <a name="AppSignonPolicyRule" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.NewAppSignonPolicyRule(scope Construct, id *string, config AppSignonPolicyRuleConfig) AppSignonPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude">PutPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression">ResetCustomExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded">ResetDeviceAssurancesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged">ResetDeviceIsManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered">ResetDeviceIsRegistered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode">ResetFactorMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded">ResetGroupsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod">ResetInactivityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude">ResetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency">ResetReAuthenticationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore">ResetRiskScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded">ResetUsersIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded">ResetUserTypesExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded">ResetUserTypesIncluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlatformInclude` <a name="PutPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude"></a>

```go
func PutPlatformInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetConstraints` <a name="ResetConstraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints"></a>

```go
func ResetConstraints()
```

##### `ResetCustomExpression` <a name="ResetCustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression"></a>

```go
func ResetCustomExpression()
```

##### `ResetDeviceAssurancesIncluded` <a name="ResetDeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded"></a>

```go
func ResetDeviceAssurancesIncluded()
```

##### `ResetDeviceIsManaged` <a name="ResetDeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged"></a>

```go
func ResetDeviceIsManaged()
```

##### `ResetDeviceIsRegistered` <a name="ResetDeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered"></a>

```go
func ResetDeviceIsRegistered()
```

##### `ResetFactorMode` <a name="ResetFactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode"></a>

```go
func ResetFactorMode()
```

##### `ResetGroupsExcluded` <a name="ResetGroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded"></a>

```go
func ResetGroupsExcluded()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded"></a>

```go
func ResetGroupsIncluded()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInactivityPeriod` <a name="ResetInactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod"></a>

```go
func ResetInactivityPeriod()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPlatformInclude` <a name="ResetPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude"></a>

```go
func ResetPlatformInclude()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetReAuthenticationFrequency` <a name="ResetReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency"></a>

```go
func ResetReAuthenticationFrequency()
```

##### `ResetRiskScore` <a name="ResetRiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore"></a>

```go
func ResetRiskScore()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType"></a>

```go
func ResetType()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded"></a>

```go
func ResetUsersExcluded()
```

##### `ResetUsersIncluded` <a name="ResetUsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded"></a>

```go
func ResetUsersIncluded()
```

##### `ResetUserTypesExcluded` <a name="ResetUserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded"></a>

```go
func ResetUserTypesExcluded()
```

##### `ResetUserTypesIncluded` <a name="ResetUserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded"></a>

```go
func ResetUserTypesIncluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.AppSignonPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.AppSignonPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.AppSignonPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.AppSignonPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppSignonPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppSignonPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppSignonPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude">PlatformInclude</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput">ConstraintsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput">CustomExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput">DeviceAssurancesIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput">DeviceIsManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput">DeviceIsRegisteredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput">FactorModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput">GroupsExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput">InactivityPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput">PlatformIncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput">ReAuthenticationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput">RiskScoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput">UsersIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput">UserTypesExcludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput">UserTypesIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints">Constraints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression">CustomExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded">DeviceAssurancesIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged">DeviceIsManaged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered">DeviceIsRegistered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode">FactorMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded">GroupsExcluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod">InactivityPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency">ReAuthenticationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore">RiskScore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded">UsersIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded">UserTypesExcluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded">UserTypesIncluded</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PlatformInclude`<sup>Required</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude"></a>

```go
func PlatformInclude() AppSignonPolicyRulePlatformIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput"></a>

```go
func ConstraintsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomExpressionInput`<sup>Optional</sup> <a name="CustomExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput"></a>

```go
func CustomExpressionInput() *string
```

- *Type:* *string

---

##### `DeviceAssurancesIncludedInput`<sup>Optional</sup> <a name="DeviceAssurancesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput"></a>

```go
func DeviceAssurancesIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceIsManagedInput`<sup>Optional</sup> <a name="DeviceIsManagedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput"></a>

```go
func DeviceIsManagedInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIsRegisteredInput`<sup>Optional</sup> <a name="DeviceIsRegisteredInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput"></a>

```go
func DeviceIsRegisteredInput() interface{}
```

- *Type:* interface{}

---

##### `FactorModeInput`<sup>Optional</sup> <a name="FactorModeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput"></a>

```go
func FactorModeInput() *string
```

- *Type:* *string

---

##### `GroupsExcludedInput`<sup>Optional</sup> <a name="GroupsExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput"></a>

```go
func GroupsExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput"></a>

```go
func GroupsIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InactivityPeriodInput`<sup>Optional</sup> <a name="InactivityPeriodInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput"></a>

```go
func InactivityPeriodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlatformIncludeInput`<sup>Optional</sup> <a name="PlatformIncludeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput"></a>

```go
func PlatformIncludeInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ReAuthenticationFrequencyInput`<sup>Optional</sup> <a name="ReAuthenticationFrequencyInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput"></a>

```go
func ReAuthenticationFrequencyInput() *string
```

- *Type:* *string

---

##### `RiskScoreInput`<sup>Optional</sup> <a name="RiskScoreInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput"></a>

```go
func RiskScoreInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput"></a>

```go
func UsersExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsersIncludedInput`<sup>Optional</sup> <a name="UsersIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput"></a>

```go
func UsersIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserTypesExcludedInput`<sup>Optional</sup> <a name="UserTypesExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput"></a>

```go
func UserTypesExcludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserTypesIncludedInput`<sup>Optional</sup> <a name="UserTypesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput"></a>

```go
func UserTypesIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints"></a>

```go
func Constraints() *[]*string
```

- *Type:* *[]*string

---

##### `CustomExpression`<sup>Required</sup> <a name="CustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression"></a>

```go
func CustomExpression() *string
```

- *Type:* *string

---

##### `DeviceAssurancesIncluded`<sup>Required</sup> <a name="DeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded"></a>

```go
func DeviceAssurancesIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceIsManaged`<sup>Required</sup> <a name="DeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged"></a>

```go
func DeviceIsManaged() interface{}
```

- *Type:* interface{}

---

##### `DeviceIsRegistered`<sup>Required</sup> <a name="DeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered"></a>

```go
func DeviceIsRegistered() interface{}
```

- *Type:* interface{}

---

##### `FactorMode`<sup>Required</sup> <a name="FactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode"></a>

```go
func FactorMode() *string
```

- *Type:* *string

---

##### `GroupsExcluded`<sup>Required</sup> <a name="GroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded"></a>

```go
func GroupsExcluded() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded"></a>

```go
func GroupsIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InactivityPeriod`<sup>Required</sup> <a name="InactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod"></a>

```go
func InactivityPeriod() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ReAuthenticationFrequency`<sup>Required</sup> <a name="ReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency"></a>

```go
func ReAuthenticationFrequency() *string
```

- *Type:* *string

---

##### `RiskScore`<sup>Required</sup> <a name="RiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore"></a>

```go
func RiskScore() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded"></a>

```go
func UsersExcluded() *[]*string
```

- *Type:* *[]*string

---

##### `UsersIncluded`<sup>Required</sup> <a name="UsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded"></a>

```go
func UsersIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `UserTypesExcluded`<sup>Required</sup> <a name="UserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded"></a>

```go
func UserTypesExcluded() *[]*string
```

- *Type:* *[]*string

---

##### `UserTypesIncluded`<sup>Required</sup> <a name="UserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded"></a>

```go
func UserTypesIncluded() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSignonPolicyRuleConfig <a name="AppSignonPolicyRuleConfig" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

&appsignonpolicyrule.AppSignonPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyId: *string,
	Access: *string,
	Constraints: *[]*string,
	CustomExpression: *string,
	DeviceAssurancesIncluded: *[]*string,
	DeviceIsManaged: interface{},
	DeviceIsRegistered: interface{},
	FactorMode: *string,
	GroupsExcluded: *[]*string,
	GroupsIncluded: *[]*string,
	Id: *string,
	InactivityPeriod: *string,
	NetworkConnection: *string,
	NetworkExcludes: *[]*string,
	NetworkIncludes: *[]*string,
	PlatformInclude: interface{},
	Priority: *f64,
	ReAuthenticationFrequency: *string,
	RiskScore: *string,
	Status: *string,
	Type: *string,
	UsersExcluded: *[]*string,
	UsersIncluded: *[]*string,
	UserTypesExcluded: *[]*string,
	UserTypesIncluded: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access">Access</a></code> | <code>*string</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints">Constraints</a></code> | <code>*[]*string</code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression">CustomExpression</a></code> | <code>*string</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded">DeviceAssurancesIncluded</a></code> | <code>*[]*string</code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged">DeviceIsManaged</a></code> | <code>interface{}</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered">DeviceIsRegistered</a></code> | <code>interface{}</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode">FactorMode</a></code> | <code>*string</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded">GroupsExcluded</a></code> | <code>*[]*string</code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod">InactivityPeriod</a></code> | <code>*string</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude">PlatformInclude</a></code> | <code>interface{}</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency">ReAuthenticationFrequency</a></code> | <code>*string</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore">RiskScore</a></code> | <code>*string</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status">Status</a></code> | <code>*string</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type">Type</a></code> | <code>*string</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>*[]*string</code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded">UsersIncluded</a></code> | <code>*[]*string</code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded">UserTypesExcluded</a></code> | <code>*[]*string</code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded">UserTypesIncluded</a></code> | <code>*[]*string</code> | Set of User Type IDs to include. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints"></a>

```go
Constraints *[]*string
```

- *Type:* *[]*string

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `CustomExpression`<sup>Optional</sup> <a name="CustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression"></a>

```go
CustomExpression *string
```

- *Type:* *string

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `DeviceAssurancesIncluded`<sup>Optional</sup> <a name="DeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded"></a>

```go
DeviceAssurancesIncluded *[]*string
```

- *Type:* *[]*string

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `DeviceIsManaged`<sup>Optional</sup> <a name="DeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged"></a>

```go
DeviceIsManaged interface{}
```

- *Type:* interface{}

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `DeviceIsRegistered`<sup>Optional</sup> <a name="DeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered"></a>

```go
DeviceIsRegistered interface{}
```

- *Type:* interface{}

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `FactorMode`<sup>Optional</sup> <a name="FactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode"></a>

```go
FactorMode *string
```

- *Type:* *string

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `GroupsExcluded`<sup>Optional</sup> <a name="GroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded"></a>

```go
GroupsExcluded *[]*string
```

- *Type:* *[]*string

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded"></a>

```go
GroupsIncluded *[]*string
```

- *Type:* *[]*string

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InactivityPeriod`<sup>Optional</sup> <a name="InactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod"></a>

```go
InactivityPeriod *string
```

- *Type:* *string

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `PlatformInclude`<sup>Optional</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude"></a>

```go
PlatformInclude interface{}
```

- *Type:* interface{}

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `ReAuthenticationFrequency`<sup>Optional</sup> <a name="ReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency"></a>

```go
ReAuthenticationFrequency *string
```

- *Type:* *string

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `RiskScore`<sup>Optional</sup> <a name="RiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore"></a>

```go
RiskScore *string
```

- *Type:* *string

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded"></a>

```go
UsersExcluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `UsersIncluded`<sup>Optional</sup> <a name="UsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded"></a>

```go
UsersIncluded *[]*string
```

- *Type:* *[]*string

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `UserTypesExcluded`<sup>Optional</sup> <a name="UserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded"></a>

```go
UserTypesExcluded *[]*string
```

- *Type:* *[]*string

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `UserTypesIncluded`<sup>Optional</sup> <a name="UserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded"></a>

```go
UserTypesIncluded *[]*string
```

- *Type:* *[]*string

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

### AppSignonPolicyRulePlatformInclude <a name="AppSignonPolicyRulePlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

&appsignonpolicyrule.AppSignonPolicyRulePlatformInclude {
	OsExpression: *string,
	OsType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression">OsExpression</a></code> | <code>*string</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}. |

---

##### `OsExpression`<sup>Optional</sup> <a name="OsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression"></a>

```go
OsExpression *string
```

- *Type:* *string

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSignonPolicyRulePlatformIncludeList <a name="AppSignonPolicyRulePlatformIncludeList" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.NewAppSignonPolicyRulePlatformIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppSignonPolicyRulePlatformIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get"></a>

```go
func Get(index *f64) AppSignonPolicyRulePlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppSignonPolicyRulePlatformIncludeOutputReference <a name="AppSignonPolicyRulePlatformIncludeOutputReference" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/appsignonpolicyrule"

appsignonpolicyrule.NewAppSignonPolicyRulePlatformIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppSignonPolicyRulePlatformIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression">ResetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsExpression` <a name="ResetOsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression"></a>

```go
func ResetOsExpression()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput">OsExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression">OsExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsExpressionInput`<sup>Optional</sup> <a name="OsExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput"></a>

```go
func OsExpressionInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `OsExpression`<sup>Required</sup> <a name="OsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression"></a>

```go
func OsExpression() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



