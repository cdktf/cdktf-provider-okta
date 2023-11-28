# `appSignonPolicyRule` Submodule <a name="`appSignonPolicyRule` Submodule" id="@cdktf/provider-okta.appSignonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSignonPolicyRule <a name="AppSignonPolicyRule" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSignonPolicyRule(Construct Scope, string Id, AppSignonPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutPlatformInclude` <a name="PutPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude"></a>

```csharp
private void PutPlatformInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude.parameter.value"></a>

- *Type:* object

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetConstraints` <a name="ResetConstraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints"></a>

```csharp
private void ResetConstraints()
```

##### `ResetCustomExpression` <a name="ResetCustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression"></a>

```csharp
private void ResetCustomExpression()
```

##### `ResetDeviceAssurancesIncluded` <a name="ResetDeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded"></a>

```csharp
private void ResetDeviceAssurancesIncluded()
```

##### `ResetDeviceIsManaged` <a name="ResetDeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged"></a>

```csharp
private void ResetDeviceIsManaged()
```

##### `ResetDeviceIsRegistered` <a name="ResetDeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered"></a>

```csharp
private void ResetDeviceIsRegistered()
```

##### `ResetFactorMode` <a name="ResetFactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode"></a>

```csharp
private void ResetFactorMode()
```

##### `ResetGroupsExcluded` <a name="ResetGroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded"></a>

```csharp
private void ResetGroupsExcluded()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded"></a>

```csharp
private void ResetGroupsIncluded()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInactivityPeriod` <a name="ResetInactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod"></a>

```csharp
private void ResetInactivityPeriod()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection"></a>

```csharp
private void ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes"></a>

```csharp
private void ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes"></a>

```csharp
private void ResetNetworkIncludes()
```

##### `ResetPlatformInclude` <a name="ResetPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude"></a>

```csharp
private void ResetPlatformInclude()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetReAuthenticationFrequency` <a name="ResetReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency"></a>

```csharp
private void ResetReAuthenticationFrequency()
```

##### `ResetRiskScore` <a name="ResetRiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore"></a>

```csharp
private void ResetRiskScore()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded"></a>

```csharp
private void ResetUsersExcluded()
```

##### `ResetUsersIncluded` <a name="ResetUsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded"></a>

```csharp
private void ResetUsersIncluded()
```

##### `ResetUserTypesExcluded` <a name="ResetUserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded"></a>

```csharp
private void ResetUserTypesExcluded()
```

##### `ResetUserTypesIncluded` <a name="ResetUserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded"></a>

```csharp
private void ResetUserTypesIncluded()
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

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSignonPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSignonPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSignonPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppSignonPolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSignonPolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSignonPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppSignonPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude">PlatformInclude</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute">SystemAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput">ConstraintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput">CustomExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput">DeviceAssurancesIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput">DeviceIsManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput">DeviceIsRegisteredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput">FactorModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput">GroupsExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput">InactivityPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput">PlatformIncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput">ReAuthenticationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput">RiskScoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput">UsersIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput">UserTypesExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput">UserTypesIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints">Constraints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression">CustomExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded">DeviceAssurancesIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged">DeviceIsManaged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered">DeviceIsRegistered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode">FactorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded">GroupsExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod">InactivityPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency">ReAuthenticationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore">RiskScore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded">UsersIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded">UserTypesExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded">UserTypesIncluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PlatformInclude`<sup>Required</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude"></a>

```csharp
public AppSignonPolicyRulePlatformIncludeList PlatformInclude { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute"></a>

```csharp
public IResolvable SystemAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput"></a>

```csharp
public string[] ConstraintsInput { get; }
```

- *Type:* string[]

---

##### `CustomExpressionInput`<sup>Optional</sup> <a name="CustomExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput"></a>

```csharp
public string CustomExpressionInput { get; }
```

- *Type:* string

---

##### `DeviceAssurancesIncludedInput`<sup>Optional</sup> <a name="DeviceAssurancesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput"></a>

```csharp
public string[] DeviceAssurancesIncludedInput { get; }
```

- *Type:* string[]

---

##### `DeviceIsManagedInput`<sup>Optional</sup> <a name="DeviceIsManagedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput"></a>

```csharp
public object DeviceIsManagedInput { get; }
```

- *Type:* object

---

##### `DeviceIsRegisteredInput`<sup>Optional</sup> <a name="DeviceIsRegisteredInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput"></a>

```csharp
public object DeviceIsRegisteredInput { get; }
```

- *Type:* object

---

##### `FactorModeInput`<sup>Optional</sup> <a name="FactorModeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput"></a>

```csharp
public string FactorModeInput { get; }
```

- *Type:* string

---

##### `GroupsExcludedInput`<sup>Optional</sup> <a name="GroupsExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput"></a>

```csharp
public string[] GroupsExcludedInput { get; }
```

- *Type:* string[]

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput"></a>

```csharp
public string[] GroupsIncludedInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InactivityPeriodInput`<sup>Optional</sup> <a name="InactivityPeriodInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput"></a>

```csharp
public string InactivityPeriodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput"></a>

```csharp
public string NetworkConnectionInput { get; }
```

- *Type:* string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput"></a>

```csharp
public string[] NetworkExcludesInput { get; }
```

- *Type:* string[]

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput"></a>

```csharp
public string[] NetworkIncludesInput { get; }
```

- *Type:* string[]

---

##### `PlatformIncludeInput`<sup>Optional</sup> <a name="PlatformIncludeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput"></a>

```csharp
public object PlatformIncludeInput { get; }
```

- *Type:* object

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ReAuthenticationFrequencyInput`<sup>Optional</sup> <a name="ReAuthenticationFrequencyInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput"></a>

```csharp
public string ReAuthenticationFrequencyInput { get; }
```

- *Type:* string

---

##### `RiskScoreInput`<sup>Optional</sup> <a name="RiskScoreInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput"></a>

```csharp
public string RiskScoreInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput"></a>

```csharp
public string[] UsersExcludedInput { get; }
```

- *Type:* string[]

---

##### `UsersIncludedInput`<sup>Optional</sup> <a name="UsersIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput"></a>

```csharp
public string[] UsersIncludedInput { get; }
```

- *Type:* string[]

---

##### `UserTypesExcludedInput`<sup>Optional</sup> <a name="UserTypesExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput"></a>

```csharp
public string[] UserTypesExcludedInput { get; }
```

- *Type:* string[]

---

##### `UserTypesIncludedInput`<sup>Optional</sup> <a name="UserTypesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput"></a>

```csharp
public string[] UserTypesIncludedInput { get; }
```

- *Type:* string[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints"></a>

```csharp
public string[] Constraints { get; }
```

- *Type:* string[]

---

##### `CustomExpression`<sup>Required</sup> <a name="CustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression"></a>

```csharp
public string CustomExpression { get; }
```

- *Type:* string

---

##### `DeviceAssurancesIncluded`<sup>Required</sup> <a name="DeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded"></a>

```csharp
public string[] DeviceAssurancesIncluded { get; }
```

- *Type:* string[]

---

##### `DeviceIsManaged`<sup>Required</sup> <a name="DeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged"></a>

```csharp
public object DeviceIsManaged { get; }
```

- *Type:* object

---

##### `DeviceIsRegistered`<sup>Required</sup> <a name="DeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered"></a>

```csharp
public object DeviceIsRegistered { get; }
```

- *Type:* object

---

##### `FactorMode`<sup>Required</sup> <a name="FactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode"></a>

```csharp
public string FactorMode { get; }
```

- *Type:* string

---

##### `GroupsExcluded`<sup>Required</sup> <a name="GroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded"></a>

```csharp
public string[] GroupsExcluded { get; }
```

- *Type:* string[]

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InactivityPeriod`<sup>Required</sup> <a name="InactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod"></a>

```csharp
public string InactivityPeriod { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; }
```

- *Type:* string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; }
```

- *Type:* string[]

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReAuthenticationFrequency`<sup>Required</sup> <a name="ReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency"></a>

```csharp
public string ReAuthenticationFrequency { get; }
```

- *Type:* string

---

##### `RiskScore`<sup>Required</sup> <a name="RiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore"></a>

```csharp
public string RiskScore { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; }
```

- *Type:* string[]

---

##### `UsersIncluded`<sup>Required</sup> <a name="UsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded"></a>

```csharp
public string[] UsersIncluded { get; }
```

- *Type:* string[]

---

##### `UserTypesExcluded`<sup>Required</sup> <a name="UserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded"></a>

```csharp
public string[] UserTypesExcluded { get; }
```

- *Type:* string[]

---

##### `UserTypesIncluded`<sup>Required</sup> <a name="UserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded"></a>

```csharp
public string[] UserTypesIncluded { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSignonPolicyRuleConfig <a name="AppSignonPolicyRuleConfig" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSignonPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PolicyId,
    string Access = null,
    string[] Constraints = null,
    string CustomExpression = null,
    string[] DeviceAssurancesIncluded = null,
    object DeviceIsManaged = null,
    object DeviceIsRegistered = null,
    string FactorMode = null,
    string[] GroupsExcluded = null,
    string[] GroupsIncluded = null,
    string Id = null,
    string InactivityPeriod = null,
    string NetworkConnection = null,
    string[] NetworkExcludes = null,
    string[] NetworkIncludes = null,
    object PlatformInclude = null,
    double Priority = null,
    string ReAuthenticationFrequency = null,
    string RiskScore = null,
    string Status = null,
    string Type = null,
    string[] UsersExcluded = null,
    string[] UsersIncluded = null,
    string[] UserTypesExcluded = null,
    string[] UserTypesIncluded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name">Name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access">Access</a></code> | <code>string</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints">Constraints</a></code> | <code>string[]</code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression">CustomExpression</a></code> | <code>string</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded">DeviceAssurancesIncluded</a></code> | <code>string[]</code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged">DeviceIsManaged</a></code> | <code>object</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered">DeviceIsRegistered</a></code> | <code>object</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode">FactorMode</a></code> | <code>string</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded">GroupsExcluded</a></code> | <code>string[]</code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod">InactivityPeriod</a></code> | <code>string</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude">PlatformInclude</a></code> | <code>object</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency">ReAuthenticationFrequency</a></code> | <code>string</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore">RiskScore</a></code> | <code>string</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status">Status</a></code> | <code>string</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type">Type</a></code> | <code>string</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded">UsersIncluded</a></code> | <code>string[]</code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded">UserTypesExcluded</a></code> | <code>string[]</code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded">UserTypesIncluded</a></code> | <code>string[]</code> | Set of User Type IDs to include. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints"></a>

```csharp
public string[] Constraints { get; set; }
```

- *Type:* string[]

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `CustomExpression`<sup>Optional</sup> <a name="CustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression"></a>

```csharp
public string CustomExpression { get; set; }
```

- *Type:* string

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `DeviceAssurancesIncluded`<sup>Optional</sup> <a name="DeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded"></a>

```csharp
public string[] DeviceAssurancesIncluded { get; set; }
```

- *Type:* string[]

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `DeviceIsManaged`<sup>Optional</sup> <a name="DeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged"></a>

```csharp
public object DeviceIsManaged { get; set; }
```

- *Type:* object

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `DeviceIsRegistered`<sup>Optional</sup> <a name="DeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered"></a>

```csharp
public object DeviceIsRegistered { get; set; }
```

- *Type:* object

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `FactorMode`<sup>Optional</sup> <a name="FactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode"></a>

```csharp
public string FactorMode { get; set; }
```

- *Type:* string

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `GroupsExcluded`<sup>Optional</sup> <a name="GroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded"></a>

```csharp
public string[] GroupsExcluded { get; set; }
```

- *Type:* string[]

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; set; }
```

- *Type:* string[]

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InactivityPeriod`<sup>Optional</sup> <a name="InactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod"></a>

```csharp
public string InactivityPeriod { get; set; }
```

- *Type:* string

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; set; }
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; set; }
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; set; }
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `PlatformInclude`<sup>Optional</sup> <a name="PlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude"></a>

```csharp
public object PlatformInclude { get; set; }
```

- *Type:* object

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `ReAuthenticationFrequency`<sup>Optional</sup> <a name="ReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency"></a>

```csharp
public string ReAuthenticationFrequency { get; set; }
```

- *Type:* string

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `RiskScore`<sup>Optional</sup> <a name="RiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore"></a>

```csharp
public string RiskScore { get; set; }
```

- *Type:* string

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; set; }
```

- *Type:* string[]

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `UsersIncluded`<sup>Optional</sup> <a name="UsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded"></a>

```csharp
public string[] UsersIncluded { get; set; }
```

- *Type:* string[]

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `UserTypesExcluded`<sup>Optional</sup> <a name="UserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded"></a>

```csharp
public string[] UserTypesExcluded { get; set; }
```

- *Type:* string[]

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `UserTypesIncluded`<sup>Optional</sup> <a name="UserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded"></a>

```csharp
public string[] UserTypesIncluded { get; set; }
```

- *Type:* string[]

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

### AppSignonPolicyRulePlatformInclude <a name="AppSignonPolicyRulePlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSignonPolicyRulePlatformInclude {
    string OsExpression = null,
    string OsType = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression">OsExpression</a></code> | <code>string</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}. |

---

##### `OsExpression`<sup>Optional</sup> <a name="OsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression"></a>

```csharp
public string OsExpression { get; set; }
```

- *Type:* string

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSignonPolicyRulePlatformIncludeList <a name="AppSignonPolicyRulePlatformIncludeList" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSignonPolicyRulePlatformIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get"></a>

```csharp
private AppSignonPolicyRulePlatformIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppSignonPolicyRulePlatformIncludeOutputReference <a name="AppSignonPolicyRulePlatformIncludeOutputReference" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppSignonPolicyRulePlatformIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsExpression` <a name="ResetOsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression"></a>

```csharp
private void ResetOsExpression()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput">OsExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression">OsExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsExpressionInput`<sup>Optional</sup> <a name="OsExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput"></a>

```csharp
public string OsExpressionInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `OsExpression`<sup>Required</sup> <a name="OsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression"></a>

```csharp
public string OsExpression { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



