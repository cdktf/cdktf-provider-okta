# `groupSchemaProperty` Submodule <a name="`groupSchemaProperty` Submodule" id="@cdktf/provider-okta.groupSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSchemaProperty <a name="GroupSchemaProperty" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property okta_group_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaProperty(Construct Scope, string Id, GroupSchemaPropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig">GroupSchemaPropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig">GroupSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority">PutMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMasterOverridePriority">ResetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetUnique">ResetUnique</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf"></a>

```csharp
private void PutArrayOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* object

---

##### `PutMasterOverridePriority` <a name="PutMasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority"></a>

```csharp
private void PutMasterOverridePriority(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* object

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf"></a>

```csharp
private void PutOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* object

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayEnum"></a>

```csharp
private void ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayOneOf"></a>

```csharp
private void ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayType"></a>

```csharp
private void ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalName"></a>

```csharp
private void ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalNamespace"></a>

```csharp
private void ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaster"></a>

```csharp
private void ResetMaster()
```

##### `ResetMasterOverridePriority` <a name="ResetMasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMasterOverridePriority"></a>

```csharp
private void ResetMasterOverridePriority()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOneOf"></a>

```csharp
private void ResetOneOf()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetUnique"></a>

```csharp
private void ResetUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupSchemaProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupSchemaProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupSchemaProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupSchemaProperty.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupSchemaProperty to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList">GroupSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriority">MasterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList">GroupSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList">GroupSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNameInput">ExternalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterInput">MasterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriorityInput">MasterOverridePriorityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOfInput">OneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.uniqueInput">UniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayType">ArrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.master">Master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.unique">Unique</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOf"></a>

```csharp
public GroupSchemaPropertyArrayOneOfList ArrayOneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList">GroupSchemaPropertyArrayOneOfList</a>

---

##### `MasterOverridePriority`<sup>Required</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriority"></a>

```csharp
public GroupSchemaPropertyMasterOverridePriorityList MasterOverridePriority { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList">GroupSchemaPropertyMasterOverridePriorityList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOf"></a>

```csharp
public GroupSchemaPropertyOneOfList OneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList">GroupSchemaPropertyOneOfList</a>

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnumInput"></a>

```csharp
public string[] ArrayEnumInput { get; }
```

- *Type:* string[]

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOfInput"></a>

```csharp
public object ArrayOneOfInput { get; }
```

- *Type:* object

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayTypeInput"></a>

```csharp
public string ArrayTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNameInput"></a>

```csharp
public string ExternalNameInput { get; }
```

- *Type:* string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespaceInput"></a>

```csharp
public string ExternalNamespaceInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterInput"></a>

```csharp
public string MasterInput { get; }
```

- *Type:* string

---

##### `MasterOverridePriorityInput`<sup>Optional</sup> <a name="MasterOverridePriorityInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriorityInput"></a>

```csharp
public object MasterOverridePriorityInput { get; }
```

- *Type:* object

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOfInput"></a>

```csharp
public object OneOfInput { get; }
```

- *Type:* object

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.uniqueInput"></a>

```csharp
public string UniqueInput { get; }
```

- *Type:* string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; }
```

- *Type:* string[]

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayType"></a>

```csharp
public string ArrayType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.master"></a>

```csharp
public string Master { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.unique"></a>

```csharp
public string Unique { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSchemaPropertyArrayOneOf <a name="GroupSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyArrayOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.const">Const</a></code> | <code>string</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.title">Title</a></code> | <code>string</code> | Display name for the enum value. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#const GroupSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

### GroupSchemaPropertyConfig <a name="GroupSchemaPropertyConfig" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Index,
    string Title,
    string Type,
    string[] ArrayEnum = null,
    object ArrayOneOf = null,
    string ArrayType = null,
    string Description = null,
    string[] Enum = null,
    string ExternalName = null,
    string ExternalNamespace = null,
    string Id = null,
    string Master = null,
    object MasterOverridePriority = null,
    double MaxLength = null,
    double MinLength = null,
    object OneOf = null,
    string Permissions = null,
    object Required = null,
    string Scope = null,
    string Unique = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.index">Index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.title">Title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.type">Type</a></code> | <code>string</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>object</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayType">ArrayType</a></code> | <code>string</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.description">Description</a></code> | <code>string</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.enum">Enum</a></code> | <code>string[]</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalName">ExternalName</a></code> | <code>string</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#id GroupSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.master">Master</a></code> | <code>string</code> | Master priority for the group schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. Default: `PROFILE_MASTER`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.masterOverridePriority">MasterOverridePriority</a></code> | <code>object</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.maxLength">MaxLength</a></code> | <code>double</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.minLength">MinLength</a></code> | <code>double</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.oneOf">OneOf</a></code> | <code>object</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.permissions">Permissions</a></code> | <code>string</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.required">Required</a></code> | <code>object</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.unique">Unique</a></code> | <code>string</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#index GroupSchemaProperty#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#type GroupSchemaProperty#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; set; }
```

- *Type:* string[]

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#array_enum GroupSchemaProperty#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayOneOf"></a>

```csharp
public object ArrayOneOf { get; set; }
```

- *Type:* object

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#array_one_of GroupSchemaProperty#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayType"></a>

```csharp
public string ArrayType { get; set; }
```

- *Type:* string

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#array_type GroupSchemaProperty#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#description GroupSchemaProperty#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#enum GroupSchemaProperty#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalName"></a>

```csharp
public string ExternalName { get; set; }
```

- *Type:* string

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#external_name GroupSchemaProperty#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; set; }
```

- *Type:* string

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#external_namespace GroupSchemaProperty#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#id GroupSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.master"></a>

```csharp
public string Master { get; set; }
```

- *Type:* string

Master priority for the group schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. Default: `PROFILE_MASTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#master GroupSchemaProperty#master}

---

##### `MasterOverridePriority`<sup>Optional</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.masterOverridePriority"></a>

```csharp
public object MasterOverridePriority { get; set; }
```

- *Type:* object

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#master_override_priority GroupSchemaProperty#master_override_priority}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#max_length GroupSchemaProperty#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#min_length GroupSchemaProperty#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.oneOf"></a>

```csharp
public object OneOf { get; set; }
```

- *Type:* object

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#one_of GroupSchemaProperty#one_of}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#permissions GroupSchemaProperty#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#required GroupSchemaProperty#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}.

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.unique"></a>

```csharp
public string Unique { get; set; }
```

- *Type:* string

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#unique GroupSchemaProperty#unique}

---

### GroupSchemaPropertyMasterOverridePriority <a name="GroupSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyMasterOverridePriority {
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#value GroupSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#type GroupSchemaProperty#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#value GroupSchemaProperty#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#type GroupSchemaProperty#type}.

---

### GroupSchemaPropertyOneOf <a name="GroupSchemaPropertyOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.const">Const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.title">Title</a></code> | <code>string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#const GroupSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSchemaPropertyArrayOneOfList <a name="GroupSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyArrayOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get"></a>

```csharp
private GroupSchemaPropertyArrayOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupSchemaPropertyArrayOneOfOutputReference <a name="GroupSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyArrayOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupSchemaPropertyMasterOverridePriorityList <a name="GroupSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyMasterOverridePriorityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get"></a>

```csharp
private GroupSchemaPropertyMasterOverridePriorityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupSchemaPropertyMasterOverridePriorityOutputReference <a name="GroupSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyMasterOverridePriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupSchemaPropertyOneOfList <a name="GroupSchemaPropertyOneOfList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get"></a>

```csharp
private GroupSchemaPropertyOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupSchemaPropertyOneOfOutputReference <a name="GroupSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupSchemaPropertyOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



