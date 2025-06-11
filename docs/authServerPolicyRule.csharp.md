# `authServerPolicyRule` Submodule <a name="`authServerPolicyRule` Submodule" id="@cdktf/provider-okta.authServerPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicyRule <a name="AuthServerPolicyRule" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule okta_auth_server_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerPolicyRule(Construct Scope, string Id, AuthServerPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig">AuthServerPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessTokenLifetimeMinutes` <a name="ResetAccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes"></a>

```csharp
private void ResetAccessTokenLifetimeMinutes()
```

##### `ResetGroupBlacklist` <a name="ResetGroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist"></a>

```csharp
private void ResetGroupBlacklist()
```

##### `ResetGroupWhitelist` <a name="ResetGroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist"></a>

```csharp
private void ResetGroupWhitelist()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId"></a>

```csharp
private void ResetInlineHookId()
```

##### `ResetRefreshTokenLifetimeMinutes` <a name="ResetRefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes"></a>

```csharp
private void ResetRefreshTokenLifetimeMinutes()
```

##### `ResetRefreshTokenWindowMinutes` <a name="ResetRefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes"></a>

```csharp
private void ResetRefreshTokenWindowMinutes()
```

##### `ResetScopeWhitelist` <a name="ResetScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist"></a>

```csharp
private void ResetScopeWhitelist()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserBlacklist` <a name="ResetUserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist"></a>

```csharp
private void ResetUserBlacklist()
```

##### `ResetUserWhitelist` <a name="ResetUserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist"></a>

```csharp
private void ResetUserWhitelist()
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

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerPolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthServerPolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthServerPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute">SystemAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput">AccessTokenLifetimeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput">AuthServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput">GrantTypeWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput">GroupBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput">GroupWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput">RefreshTokenLifetimeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput">RefreshTokenWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput">ScopeWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput">UserBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput">UserWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes">AccessTokenLifetimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId">AuthServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist">GrantTypeWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist">GroupBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist">GroupWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes">RefreshTokenLifetimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes">RefreshTokenWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist">ScopeWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist">UserBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist">UserWhitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute"></a>

```csharp
public IResolvable SystemAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccessTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="AccessTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput"></a>

```csharp
public double AccessTokenLifetimeMinutesInput { get; }
```

- *Type:* double

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput"></a>

```csharp
public string AuthServerIdInput { get; }
```

- *Type:* string

---

##### `GrantTypeWhitelistInput`<sup>Optional</sup> <a name="GrantTypeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput"></a>

```csharp
public string[] GrantTypeWhitelistInput { get; }
```

- *Type:* string[]

---

##### `GroupBlacklistInput`<sup>Optional</sup> <a name="GroupBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput"></a>

```csharp
public string[] GroupBlacklistInput { get; }
```

- *Type:* string[]

---

##### `GroupWhitelistInput`<sup>Optional</sup> <a name="GroupWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput"></a>

```csharp
public string[] GroupWhitelistInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput"></a>

```csharp
public string InlineHookIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RefreshTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="RefreshTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput"></a>

```csharp
public double RefreshTokenLifetimeMinutesInput { get; }
```

- *Type:* double

---

##### `RefreshTokenWindowMinutesInput`<sup>Optional</sup> <a name="RefreshTokenWindowMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput"></a>

```csharp
public double RefreshTokenWindowMinutesInput { get; }
```

- *Type:* double

---

##### `ScopeWhitelistInput`<sup>Optional</sup> <a name="ScopeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput"></a>

```csharp
public string[] ScopeWhitelistInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserBlacklistInput`<sup>Optional</sup> <a name="UserBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput"></a>

```csharp
public string[] UserBlacklistInput { get; }
```

- *Type:* string[]

---

##### `UserWhitelistInput`<sup>Optional</sup> <a name="UserWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput"></a>

```csharp
public string[] UserWhitelistInput { get; }
```

- *Type:* string[]

---

##### `AccessTokenLifetimeMinutes`<sup>Required</sup> <a name="AccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes"></a>

```csharp
public double AccessTokenLifetimeMinutes { get; }
```

- *Type:* double

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId"></a>

```csharp
public string AuthServerId { get; }
```

- *Type:* string

---

##### `GrantTypeWhitelist`<sup>Required</sup> <a name="GrantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist"></a>

```csharp
public string[] GrantTypeWhitelist { get; }
```

- *Type:* string[]

---

##### `GroupBlacklist`<sup>Required</sup> <a name="GroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist"></a>

```csharp
public string[] GroupBlacklist { get; }
```

- *Type:* string[]

---

##### `GroupWhitelist`<sup>Required</sup> <a name="GroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist"></a>

```csharp
public string[] GroupWhitelist { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RefreshTokenLifetimeMinutes`<sup>Required</sup> <a name="RefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes"></a>

```csharp
public double RefreshTokenLifetimeMinutes { get; }
```

- *Type:* double

---

##### `RefreshTokenWindowMinutes`<sup>Required</sup> <a name="RefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes"></a>

```csharp
public double RefreshTokenWindowMinutes { get; }
```

- *Type:* double

---

##### `ScopeWhitelist`<sup>Required</sup> <a name="ScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist"></a>

```csharp
public string[] ScopeWhitelist { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserBlacklist`<sup>Required</sup> <a name="UserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist"></a>

```csharp
public string[] UserBlacklist { get; }
```

- *Type:* string[]

---

##### `UserWhitelist`<sup>Required</sup> <a name="UserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist"></a>

```csharp
public string[] UserWhitelist { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyRuleConfig <a name="AuthServerPolicyRuleConfig" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthServerId,
    string[] GrantTypeWhitelist,
    string Name,
    string PolicyId,
    double Priority,
    double AccessTokenLifetimeMinutes = null,
    string[] GroupBlacklist = null,
    string[] GroupWhitelist = null,
    string Id = null,
    string InlineHookId = null,
    double RefreshTokenLifetimeMinutes = null,
    double RefreshTokenWindowMinutes = null,
    string[] ScopeWhitelist = null,
    string Status = null,
    string Type = null,
    string[] UserBlacklist = null,
    string[] UserWhitelist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId">AuthServerId</a></code> | <code>string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist">GrantTypeWhitelist</a></code> | <code>string[]</code> | Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*). |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name">Name</a></code> | <code>string</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes">AccessTokenLifetimeMinutes</a></code> | <code>double</code> | Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist">GroupBlacklist</a></code> | <code>string[]</code> | Specifies a set of Groups whose Users are to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist">GroupWhitelist</a></code> | <code>string[]</code> | Specifies a set of Groups whose Users are to be included. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | The ID of the inline token to trigger. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes">RefreshTokenLifetimeMinutes</a></code> | <code>double</code> | Lifetime of refresh token. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes">RefreshTokenWindowMinutes</a></code> | <code>double</code> | Window in which a refresh token can be used. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist">ScopeWhitelist</a></code> | <code>string[]</code> | Scopes allowed for this policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status">Status</a></code> | <code>string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type">Type</a></code> | <code>string</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist">UserBlacklist</a></code> | <code>string[]</code> | Specifies a set of Users to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist">UserWhitelist</a></code> | <code>string[]</code> | Specifies a set of Users to be included. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId"></a>

```csharp
public string AuthServerId { get; set; }
```

- *Type:* string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `GrantTypeWhitelist`<sup>Required</sup> <a name="GrantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist"></a>

```csharp
public string[] GrantTypeWhitelist { get; set; }
```

- *Type:* string[]

Accepted grant type values, `authorization_code`, `implicit`, `password`, `client_credentials`, `urn:ietf:params:oauth:grant-type:saml2-bearer` (*Early Access Property*), `urn:ietf:params:oauth:grant-type:token-exchange` (*Early Access Property*),`urn:ietf:params:oauth:grant-type:device_code` (*Early Access Property*), `interaction_code` (*OIE only*).

For `implicit` value either `user_whitelist` or `group_whitelist` should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `AccessTokenLifetimeMinutes`<sup>Optional</sup> <a name="AccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes"></a>

```csharp
public double AccessTokenLifetimeMinutes { get; set; }
```

- *Type:* double

Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}

---

##### `GroupBlacklist`<sup>Optional</sup> <a name="GroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist"></a>

```csharp
public string[] GroupBlacklist { get; set; }
```

- *Type:* string[]

Specifies a set of Groups whose Users are to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}

---

##### `GroupWhitelist`<sup>Optional</sup> <a name="GroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist"></a>

```csharp
public string[] GroupWhitelist { get; set; }
```

- *Type:* string[]

Specifies a set of Groups whose Users are to be included.

Can be set to Group ID or to the following: `EVERYONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; set; }
```

- *Type:* string

The ID of the inline token to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}

---

##### `RefreshTokenLifetimeMinutes`<sup>Optional</sup> <a name="RefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes"></a>

```csharp
public double RefreshTokenLifetimeMinutes { get; set; }
```

- *Type:* double

Lifetime of refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}

---

##### `RefreshTokenWindowMinutes`<sup>Optional</sup> <a name="RefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes"></a>

```csharp
public double RefreshTokenWindowMinutes { get; set; }
```

- *Type:* double

Window in which a refresh token can be used.

It can be a value between 5 and 2628000 (5 years) minutes. Default is `10080` (7 days).`refresh_token_window_minutes` must be between `access_token_lifetime_minutes` and `refresh_token_lifetime_minutes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}

---

##### `ScopeWhitelist`<sup>Optional</sup> <a name="ScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist"></a>

```csharp
public string[] ScopeWhitelist { get; set; }
```

- *Type:* string[]

Scopes allowed for this policy rule.

They can be whitelisted by name or all can be whitelisted with `*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `UserBlacklist`<sup>Optional</sup> <a name="UserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist"></a>

```csharp
public string[] UserBlacklist { get; set; }
```

- *Type:* string[]

Specifies a set of Users to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}

---

##### `UserWhitelist`<sup>Optional</sup> <a name="UserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist"></a>

```csharp
public string[] UserWhitelist { get; set; }
```

- *Type:* string[]

Specifies a set of Users to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}

---



