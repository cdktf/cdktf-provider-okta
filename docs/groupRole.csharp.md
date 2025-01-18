# `groupRole` Submodule <a name="`groupRole` Submodule" id="@cdktf/provider-okta.groupRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRole <a name="GroupRole" id="@cdktf/provider-okta.groupRole.GroupRole"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role okta_group_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupRole(Construct Scope, string Id, GroupRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig">GroupRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.groupRole.GroupRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig">GroupRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetDisableNotifications">ResetDisableNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetResourceSetId">ResetResourceSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetRoleId">ResetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetTargetAppList">ResetTargetAppList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.resetTargetGroupList">ResetTargetGroupList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupRole.GroupRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupRole.GroupRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.groupRole.GroupRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.groupRole.GroupRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.groupRole.GroupRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.groupRole.GroupRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.groupRole.GroupRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRole.GroupRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.groupRole.GroupRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.groupRole.GroupRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.groupRole.GroupRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableNotifications` <a name="ResetDisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRole.resetDisableNotifications"></a>

```csharp
private void ResetDisableNotifications()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.groupRole.GroupRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceSetId` <a name="ResetResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRole.resetResourceSetId"></a>

```csharp
private void ResetResourceSetId()
```

##### `ResetRoleId` <a name="ResetRoleId" id="@cdktf/provider-okta.groupRole.GroupRole.resetRoleId"></a>

```csharp
private void ResetRoleId()
```

##### `ResetTargetAppList` <a name="ResetTargetAppList" id="@cdktf/provider-okta.groupRole.GroupRole.resetTargetAppList"></a>

```csharp
private void ResetTargetAppList()
```

##### `ResetTargetGroupList` <a name="ResetTargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRole.resetTargetGroupList"></a>

```csharp
private void ResetTargetGroupList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.groupRole.GroupRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRole.GroupRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRole.GroupRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.disableNotificationsInput">DisableNotificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetIdInput">ResourceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetAppListInput">TargetAppListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupListInput">TargetGroupListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.disableNotifications">DisableNotifications</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetId">ResourceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetAppList">TargetAppList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupList">TargetGroupList</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.groupRole.GroupRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.groupRole.GroupRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupRole.GroupRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.groupRole.GroupRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.groupRole.GroupRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRole.GroupRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRole.GroupRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRole.GroupRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRole.GroupRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRole.GroupRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRole.GroupRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisableNotificationsInput`<sup>Optional</sup> <a name="DisableNotificationsInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.disableNotificationsInput"></a>

```csharp
public object DisableNotificationsInput { get; }
```

- *Type:* object

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceSetIdInput`<sup>Optional</sup> <a name="ResourceSetIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetIdInput"></a>

```csharp
public string ResourceSetIdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `TargetAppListInput`<sup>Optional</sup> <a name="TargetAppListInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetAppListInput"></a>

```csharp
public string[] TargetAppListInput { get; }
```

- *Type:* string[]

---

##### `TargetGroupListInput`<sup>Optional</sup> <a name="TargetGroupListInput" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupListInput"></a>

```csharp
public string[] TargetGroupListInput { get; }
```

- *Type:* string[]

---

##### `DisableNotifications`<sup>Required</sup> <a name="DisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRole.property.disableNotifications"></a>

```csharp
public object DisableNotifications { get; }
```

- *Type:* object

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-okta.groupRole.GroupRole.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceSetId`<sup>Required</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRole.property.resourceSetId"></a>

```csharp
public string ResourceSetId { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.groupRole.GroupRole.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `TargetAppList`<sup>Required</sup> <a name="TargetAppList" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetAppList"></a>

```csharp
public string[] TargetAppList { get; }
```

- *Type:* string[]

---

##### `TargetGroupList`<sup>Required</sup> <a name="TargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRole.property.targetGroupList"></a>

```csharp
public string[] TargetGroupList { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.groupRole.GroupRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRoleConfig <a name="GroupRoleConfig" id="@cdktf/provider-okta.groupRole.GroupRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId,
    string RoleType,
    object DisableNotifications = null,
    string Id = null,
    string ResourceSetId = null,
    string RoleId = null,
    string[] TargetAppList = null,
    string[] TargetGroupList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.groupId">GroupId</a></code> | <code>string</code> | ID of group to attach admin roles to. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleType">RoleType</a></code> | <code>string</code> | Admin role assigned to the group. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.disableNotifications">DisableNotifications</a></code> | <code>object</code> | When this setting is enabled, the admins won't receive any of the default Okta administrator emails. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#id GroupRole#id}. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.resourceSetId">ResourceSetId</a></code> | <code>string</code> | Resource Set ID. Required for role_type = `CUSTOM`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleId">RoleId</a></code> | <code>string</code> | Role ID. Required for role_type = `CUSTOM`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetAppList">TargetAppList</a></code> | <code>string[]</code> | A list of app names (name represents set of app instances, like 'salesforce' or 'facebook'), or a combination of app name and app instance ID (like 'facebook.0oapsqQ6dv19pqyEo0g3') you would like as the targets of the admin role. - Only supported when used with the role type `APP_ADMIN`. |
| <code><a href="#@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetGroupList">TargetGroupList</a></code> | <code>string[]</code> | A list of group IDs you would like as the targets of the admin role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

ID of group to attach admin roles to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#group_id GroupRole#group_id}

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Admin role assigned to the group.

It can be any one of the following values:
"API_ADMIN",
"APP_ADMIN",
"CUSTOM",
"GROUP_MEMBERSHIP_ADMIN",
"HELP_DESK_ADMIN",
"MOBILE_ADMIN",
"ORG_ADMIN",
"READ_ONLY_ADMIN",
"REPORT_ADMIN",
"SUPER_ADMIN",
"USER_ADMIN"
. See [API Docs](https://developer.okta.com/docs/api/openapi/okta-management/guides/roles/#standard-roles).
- "USER_ADMIN" is the Group Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#role_type GroupRole#role_type}

---

##### `DisableNotifications`<sup>Optional</sup> <a name="DisableNotifications" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.disableNotifications"></a>

```csharp
public object DisableNotifications { get; set; }
```

- *Type:* object

When this setting is enabled, the admins won't receive any of the default Okta administrator emails.

These admins also won't have access to contact Okta Support and open support cases on behalf of your org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#disable_notifications GroupRole#disable_notifications}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#id GroupRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceSetId`<sup>Optional</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.resourceSetId"></a>

```csharp
public string ResourceSetId { get; set; }
```

- *Type:* string

Resource Set ID. Required for role_type = `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#resource_set_id GroupRole#resource_set_id}

---

##### `RoleId`<sup>Optional</sup> <a name="RoleId" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

Role ID. Required for role_type = `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#role_id GroupRole#role_id}

---

##### `TargetAppList`<sup>Optional</sup> <a name="TargetAppList" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetAppList"></a>

```csharp
public string[] TargetAppList { get; set; }
```

- *Type:* string[]

A list of app names (name represents set of app instances, like 'salesforce' or 'facebook'), or a combination of app name and app instance ID (like 'facebook.0oapsqQ6dv19pqyEo0g3') you would like as the targets of the admin role. - Only supported when used with the role type `APP_ADMIN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#target_app_list GroupRole#target_app_list}

---

##### `TargetGroupList`<sup>Optional</sup> <a name="TargetGroupList" id="@cdktf/provider-okta.groupRole.GroupRoleConfig.property.targetGroupList"></a>

```csharp
public string[] TargetGroupList { get; set; }
```

- *Type:* string[]

A list of group IDs you would like as the targets of the admin role.

* Only supported when used with the role types: `GROUP_MEMBERSHIP_ADMIN`, `HELP_DESK_ADMIN`, or `USER_ADMIN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/group_role#target_group_list GroupRole#target_group_list}

---



