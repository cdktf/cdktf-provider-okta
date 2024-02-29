# `appUserBaseSchemaProperty` Submodule <a name="`appUserBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserBaseSchemaProperty <a name="AppUserBaseSchemaProperty" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property okta_app_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserBaseSchemaProperty(Construct Scope, string Id, AppUserBaseSchemaPropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig">AppUserBaseSchemaPropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig">AppUserBaseSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster"></a>

```csharp
private void ResetMaster()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType"></a>

```csharp
private void ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserBaseSchemaProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserBaseSchemaProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserBaseSchemaProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserBaseSchemaProperty.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppUserBaseSchemaProperty to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppUserBaseSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppUserBaseSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput">MasterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master">Master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType">UserType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput"></a>

```csharp
public string MasterInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master"></a>

```csharp
public string Master { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserBaseSchemaPropertyConfig <a name="AppUserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserBaseSchemaPropertyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Index,
    string Title,
    string Type,
    string Id = null,
    string Master = null,
    string Pattern = null,
    string Permissions = null,
    object Required = null,
    string UserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId">AppId</a></code> | <code>string</code> | The Application's ID the user schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index">Index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title">Title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type">Type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master">Master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern">Pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions">Permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required">Required</a></code> | <code>object</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType">UserType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The Application's ID the user schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#app_id AppUserBaseSchemaProperty#app_id}

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#index AppUserBaseSchemaProperty#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#title AppUserBaseSchemaProperty#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#type AppUserBaseSchemaProperty#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master"></a>

```csharp
public string Master { get; set; }
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#master AppUserBaseSchemaProperty#master}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#pattern AppUserBaseSchemaProperty#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#permissions AppUserBaseSchemaProperty#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#required AppUserBaseSchemaProperty#required}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/app_user_base_schema_property#user_type AppUserBaseSchemaProperty#user_type}

---



