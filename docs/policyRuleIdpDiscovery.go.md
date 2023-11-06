# `okta_policy_rule_idp_discovery`

Refer to the Terraform Registory for docs: [`okta_policy_rule_idp_discovery`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery).

# `policyRuleIdpDiscovery` Submodule <a name="`policyRuleIdpDiscovery` Submodule" id="@cdktf/provider-okta.policyRuleIdpDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleIdpDiscovery <a name="PolicyRuleIdpDiscovery" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscovery(scope Construct, id *string, config PolicyRuleIdpDiscoveryConfig) PolicyRuleIdpDiscovery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig">PolicyRuleIdpDiscoveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig">PolicyRuleIdpDiscoveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude">PutAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude">PutAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude">PutPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns">PutUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude">ResetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude">ResetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId">ResetIdpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType">ResetIdpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude">ResetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute">ResetUserIdentifierAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns">ResetUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType">ResetUserIdentifierType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAppExclude` <a name="PutAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude"></a>

```go
func PutAppExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAppInclude` <a name="PutAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude"></a>

```go
func PutAppInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlatformInclude` <a name="PutPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude"></a>

```go
func PutPlatformInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUserIdentifierPatterns` <a name="PutUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns"></a>

```go
func PutUserIdentifierPatterns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppExclude` <a name="ResetAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude"></a>

```go
func ResetAppExclude()
```

##### `ResetAppInclude` <a name="ResetAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude"></a>

```go
func ResetAppInclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId"></a>

```go
func ResetId()
```

##### `ResetIdpId` <a name="ResetIdpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId"></a>

```go
func ResetIdpId()
```

##### `ResetIdpType` <a name="ResetIdpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType"></a>

```go
func ResetIdpType()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection"></a>

```go
func ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes"></a>

```go
func ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes"></a>

```go
func ResetNetworkIncludes()
```

##### `ResetPlatformInclude` <a name="ResetPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude"></a>

```go
func ResetPlatformInclude()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUserIdentifierAttribute` <a name="ResetUserIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute"></a>

```go
func ResetUserIdentifierAttribute()
```

##### `ResetUserIdentifierPatterns` <a name="ResetUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns"></a>

```go
func ResetUserIdentifierPatterns()
```

##### `ResetUserIdentifierType` <a name="ResetUserIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType"></a>

```go
func ResetUserIdentifierType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.PolicyRuleIdpDiscovery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.PolicyRuleIdpDiscovery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.PolicyRuleIdpDiscovery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.PolicyRuleIdpDiscovery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyRuleIdpDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyRuleIdpDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleIdpDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude">AppExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude">AppInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude">PlatformInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns">UserIdentifierPatterns</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput">AppExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput">AppIncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput">IdpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput">IdpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput">PlatformIncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput">UserIdentifierAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput">UserIdentifierPatternsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput">UserIdentifierTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId">IdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType">IdpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute">UserIdentifierAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType">UserIdentifierType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppExclude`<sup>Required</sup> <a name="AppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude"></a>

```go
func AppExclude() PolicyRuleIdpDiscoveryAppExcludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a>

---

##### `AppInclude`<sup>Required</sup> <a name="AppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude"></a>

```go
func AppInclude() PolicyRuleIdpDiscoveryAppIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a>

---

##### `PlatformInclude`<sup>Required</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude"></a>

```go
func PlatformInclude() PolicyRuleIdpDiscoveryPlatformIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a>

---

##### `UserIdentifierPatterns`<sup>Required</sup> <a name="UserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns"></a>

```go
func UserIdentifierPatterns() PolicyRuleIdpDiscoveryUserIdentifierPatternsList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a>

---

##### `AppExcludeInput`<sup>Optional</sup> <a name="AppExcludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput"></a>

```go
func AppExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `AppIncludeInput`<sup>Optional</sup> <a name="AppIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput"></a>

```go
func AppIncludeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput"></a>

```go
func IdpIdInput() *string
```

- *Type:* *string

---

##### `IdpTypeInput`<sup>Optional</sup> <a name="IdpTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput"></a>

```go
func IdpTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput"></a>

```go
func NetworkConnectionInput() *string
```

- *Type:* *string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput"></a>

```go
func NetworkExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput"></a>

```go
func NetworkIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlatformIncludeInput`<sup>Optional</sup> <a name="PlatformIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput"></a>

```go
func PlatformIncludeInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UserIdentifierAttributeInput`<sup>Optional</sup> <a name="UserIdentifierAttributeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput"></a>

```go
func UserIdentifierAttributeInput() *string
```

- *Type:* *string

---

##### `UserIdentifierPatternsInput`<sup>Optional</sup> <a name="UserIdentifierPatternsInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput"></a>

```go
func UserIdentifierPatternsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdentifierTypeInput`<sup>Optional</sup> <a name="UserIdentifierTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput"></a>

```go
func UserIdentifierTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId"></a>

```go
func IdpId() *string
```

- *Type:* *string

---

##### `IdpType`<sup>Required</sup> <a name="IdpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType"></a>

```go
func IdpType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection"></a>

```go
func NetworkConnection() *string
```

- *Type:* *string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes"></a>

```go
func NetworkExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes"></a>

```go
func NetworkIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserIdentifierAttribute`<sup>Required</sup> <a name="UserIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute"></a>

```go
func UserIdentifierAttribute() *string
```

- *Type:* *string

---

##### `UserIdentifierType`<sup>Required</sup> <a name="UserIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType"></a>

```go
func UserIdentifierType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleIdpDiscoveryAppExclude <a name="PolicyRuleIdpDiscoveryAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

&policyruleidpdiscovery.PolicyRuleIdpDiscoveryAppExclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryAppInclude <a name="PolicyRuleIdpDiscoveryAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

&policyruleidpdiscovery.PolicyRuleIdpDiscoveryAppInclude {
	Type: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryConfig <a name="PolicyRuleIdpDiscoveryConfig" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

&policyruleidpdiscovery.PolicyRuleIdpDiscoveryConfig {
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
	Id: *string,
	IdpId: *string,
	IdpType: *string,
	NetworkConnection: *string,
	NetworkExcludes: *[]*string,
	NetworkIncludes: *[]*string,
	PlatformInclude: interface{},
	PolicyId: *string,
	Priority: *f64,
	Status: *string,
	UserIdentifierAttribute: *string,
	UserIdentifierPatterns: interface{},
	UserIdentifierType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name">Name</a></code> | <code>*string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude">AppExclude</a></code> | <code>interface{}</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude">AppInclude</a></code> | <code>interface{}</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId">IdpId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType">IdpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection">NetworkConnection</a></code> | <code>*string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>*[]*string</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>*[]*string</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude">PlatformInclude</a></code> | <code>interface{}</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status">Status</a></code> | <code>*string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute">UserIdentifierAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns">UserIdentifierPatterns</a></code> | <code>interface{}</code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType">UserIdentifierType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `AppExclude`<sup>Optional</sup> <a name="AppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude"></a>

```go
AppExclude interface{}
```

- *Type:* interface{}

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `AppInclude`<sup>Optional</sup> <a name="AppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude"></a>

```go
AppInclude interface{}
```

- *Type:* interface{}

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpId`<sup>Optional</sup> <a name="IdpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId"></a>

```go
IdpId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}.

---

##### `IdpType`<sup>Optional</sup> <a name="IdpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType"></a>

```go
IdpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}.

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection"></a>

```go
NetworkConnection *string
```

- *Type:* *string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes"></a>

```go
NetworkExcludes *[]*string
```

- *Type:* *[]*string

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes"></a>

```go
NetworkIncludes *[]*string
```

- *Type:* *[]*string

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `PlatformInclude`<sup>Optional</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude"></a>

```go
PlatformInclude interface{}
```

- *Type:* interface{}

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `UserIdentifierAttribute`<sup>Optional</sup> <a name="UserIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute"></a>

```go
UserIdentifierAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}.

---

##### `UserIdentifierPatterns`<sup>Optional</sup> <a name="UserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns"></a>

```go
UserIdentifierPatterns interface{}
```

- *Type:* interface{}

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `UserIdentifierType`<sup>Optional</sup> <a name="UserIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType"></a>

```go
UserIdentifierType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}.

---

### PolicyRuleIdpDiscoveryPlatformInclude <a name="PolicyRuleIdpDiscoveryPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

&policyruleidpdiscovery.PolicyRuleIdpDiscoveryPlatformInclude {
	OsExpression: *string,
	OsType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression">OsExpression</a></code> | <code>*string</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |

---

##### `OsExpression`<sup>Optional</sup> <a name="OsExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression"></a>

```go
OsExpression *string
```

- *Type:* *string

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

### PolicyRuleIdpDiscoveryUserIdentifierPatterns <a name="PolicyRuleIdpDiscoveryUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

&policyruleidpdiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns {
	MatchType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType">MatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}. |

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleIdpDiscoveryAppExcludeList <a name="PolicyRuleIdpDiscoveryAppExcludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryAppExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleIdpDiscoveryAppExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get"></a>

```go
func Get(index *f64) PolicyRuleIdpDiscoveryAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryAppExcludeOutputReference <a name="PolicyRuleIdpDiscoveryAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryAppExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleIdpDiscoveryAppExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryAppIncludeList <a name="PolicyRuleIdpDiscoveryAppIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryAppIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleIdpDiscoveryAppIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get"></a>

```go
func Get(index *f64) PolicyRuleIdpDiscoveryAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryAppIncludeOutputReference <a name="PolicyRuleIdpDiscoveryAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryAppIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleIdpDiscoveryAppIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryPlatformIncludeList <a name="PolicyRuleIdpDiscoveryPlatformIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryPlatformIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleIdpDiscoveryPlatformIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get"></a>

```go
func Get(index *f64) PolicyRuleIdpDiscoveryPlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryPlatformIncludeOutputReference <a name="PolicyRuleIdpDiscoveryPlatformIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryPlatformIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleIdpDiscoveryPlatformIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression">ResetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsExpression` <a name="ResetOsExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression"></a>

```go
func ResetOsExpression()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput">OsExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression">OsExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsExpressionInput`<sup>Optional</sup> <a name="OsExpressionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput"></a>

```go
func OsExpressionInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `OsExpression`<sup>Required</sup> <a name="OsExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression"></a>

```go
func OsExpression() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsList <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryUserIdentifierPatternsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicyRuleIdpDiscoveryUserIdentifierPatternsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get"></a>

```go
func Get(index *f64) PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/policyruleidpdiscovery"

policyruleidpdiscovery.NewPolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType"></a>

```go
func ResetMatchType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



