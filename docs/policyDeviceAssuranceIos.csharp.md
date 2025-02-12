# `policyDeviceAssuranceIos` Submodule <a name="`policyDeviceAssuranceIos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceIos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceIos <a name="PolicyDeviceAssuranceIos" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios okta_policy_device_assurance_ios}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceIos(Construct Scope, string Id, PolicyDeviceAssuranceIosConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig">PolicyDeviceAssuranceIosConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig">PolicyDeviceAssuranceIosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetJailbreak">ResetJailbreak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOsVersion">ResetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetScreenlockType">ResetScreenlockType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetJailbreak` <a name="ResetJailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetJailbreak"></a>

```csharp
private void ResetJailbreak()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOsVersion"></a>

```csharp
private void ResetOsVersion()
```

##### `ResetScreenlockType` <a name="ResetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetScreenlockType"></a>

```csharp
private void ResetScreenlockType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceIos resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceIos.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceIos.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceIos.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyDeviceAssuranceIos.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyDeviceAssuranceIos resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceIos to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceIos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceIos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreakInput">JailbreakInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersionInput">OsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockTypeInput">ScreenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreak">Jailbreak</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `JailbreakInput`<sup>Optional</sup> <a name="JailbreakInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreakInput"></a>

```csharp
public object JailbreakInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersionInput"></a>

```csharp
public string OsVersionInput { get; }
```

- *Type:* string

---

##### `ScreenlockTypeInput`<sup>Optional</sup> <a name="ScreenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockTypeInput"></a>

```csharp
public string[] ScreenlockTypeInput { get; }
```

- *Type:* string[]

---

##### `Jailbreak`<sup>Required</sup> <a name="Jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreak"></a>

```csharp
public object Jailbreak { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceIosConfig <a name="PolicyDeviceAssuranceIosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyDeviceAssuranceIosConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Jailbreak = null,
    string OsVersion = null,
    string[] ScreenlockType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.name">Name</a></code> | <code>string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.jailbreak">Jailbreak</a></code> | <code>object</code> | Is the device jailbroken in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.osVersion">OsVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.screenlockType">ScreenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios#name PolicyDeviceAssuranceIos#name}

---

##### `Jailbreak`<sup>Optional</sup> <a name="Jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.jailbreak"></a>

```csharp
public object Jailbreak { get; set; }
```

- *Type:* object

Is the device jailbroken in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios#jailbreak PolicyDeviceAssuranceIos#jailbreak}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.osVersion"></a>

```csharp
public string OsVersion { get; set; }
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios#os_version PolicyDeviceAssuranceIos#os_version}

---

##### `ScreenlockType`<sup>Optional</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.screenlockType"></a>

```csharp
public string[] ScreenlockType { get; set; }
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/policy_device_assurance_ios#screenlock_type PolicyDeviceAssuranceIos#screenlock_type}

---



