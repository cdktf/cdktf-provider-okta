# `adminRoleCustomAssignments` Submodule <a name="`adminRoleCustomAssignments` Submodule" id="@cdktf/provider-okta.adminRoleCustomAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleCustomAssignments <a name="AdminRoleCustomAssignments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments okta_admin_role_custom_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AdminRoleCustomAssignments(Construct Scope, string Id, AdminRoleCustomAssignmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig">AdminRoleCustomAssignmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig">AdminRoleCustomAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers">ResetMembers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers"></a>

```csharp
private void ResetMembers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdminRoleCustomAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleCustomAssignments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleCustomAssignments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleCustomAssignments.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleCustomAssignments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AdminRoleCustomAssignments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdminRoleCustomAssignments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdminRoleCustomAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AdminRoleCustomAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput">CustomRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput">ResourceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId">CustomRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId">ResourceSetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomRoleIdInput`<sup>Optional</sup> <a name="CustomRoleIdInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput"></a>

```csharp
public string CustomRoleIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ResourceSetIdInput`<sup>Optional</sup> <a name="ResourceSetIdInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput"></a>

```csharp
public string ResourceSetIdInput { get; }
```

- *Type:* string

---

##### `CustomRoleId`<sup>Required</sup> <a name="CustomRoleId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId"></a>

```csharp
public string CustomRoleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `ResourceSetId`<sup>Required</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId"></a>

```csharp
public string ResourceSetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleCustomAssignmentsConfig <a name="AdminRoleCustomAssignmentsConfig" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AdminRoleCustomAssignmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomRoleId,
    string ResourceSetId,
    string Id = null,
    string[] Members = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId">CustomRoleId</a></code> | <code>string</code> | ID of the Custom Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId">ResourceSetId</a></code> | <code>string</code> | ID of the target Resource Set. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members">Members</a></code> | <code>string[]</code> | The hrefs that point to User(s) and/or Group(s) that receive the Role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomRoleId`<sup>Required</sup> <a name="CustomRoleId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId"></a>

```csharp
public string CustomRoleId { get; set; }
```

- *Type:* string

ID of the Custom Role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#custom_role_id AdminRoleCustomAssignments#custom_role_id}

---

##### `ResourceSetId`<sup>Required</sup> <a name="ResourceSetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId"></a>

```csharp
public string ResourceSetId { get; set; }
```

- *Type:* string

ID of the target Resource Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#resource_set_id AdminRoleCustomAssignments#resource_set_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

The hrefs that point to User(s) and/or Group(s) that receive the Role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/admin_role_custom_assignments#members AdminRoleCustomAssignments#members}

---



