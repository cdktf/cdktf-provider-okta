# `customizedSigninPage` Submodule <a name="`customizedSigninPage` Submodule" id="@cdktf/provider-okta.customizedSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomizedSigninPage <a name="CustomizedSigninPage" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page okta_customized_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPage(Construct Scope, string Id, CustomizedSigninPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting">PutContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations">PutWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting">ResetContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations">ResetWidgetCustomizations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentSecurityPolicySetting` <a name="PutContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting"></a>

```csharp
private void PutContentSecurityPolicySetting(CustomizedSigninPageContentSecurityPolicySetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `PutWidgetCustomizations` <a name="PutWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations"></a>

```csharp
private void PutWidgetCustomizations(CustomizedSigninPageWidgetCustomizations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---

##### `ResetContentSecurityPolicySetting` <a name="ResetContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting"></a>

```csharp
private void ResetContentSecurityPolicySetting()
```

##### `ResetWidgetCustomizations` <a name="ResetWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations"></a>

```csharp
private void ResetWidgetCustomizations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CustomizedSigninPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CustomizedSigninPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CustomizedSigninPage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CustomizedSigninPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomizedSigninPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomizedSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CustomizedSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput">ContentSecurityPolicySettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput">PageContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput">WidgetCustomizationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput">WidgetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent">PageContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion">WidgetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentSecurityPolicySetting`<sup>Required</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting"></a>

```csharp
public CustomizedSigninPageContentSecurityPolicySettingOutputReference ContentSecurityPolicySetting { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WidgetCustomizations`<sup>Required</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations"></a>

```csharp
public CustomizedSigninPageWidgetCustomizationsOutputReference WidgetCustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `ContentSecurityPolicySettingInput`<sup>Optional</sup> <a name="ContentSecurityPolicySettingInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput"></a>

```csharp
public object ContentSecurityPolicySettingInput { get; }
```

- *Type:* object

---

##### `PageContentInput`<sup>Optional</sup> <a name="PageContentInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput"></a>

```csharp
public string PageContentInput { get; }
```

- *Type:* string

---

##### `WidgetCustomizationsInput`<sup>Optional</sup> <a name="WidgetCustomizationsInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput"></a>

```csharp
public object WidgetCustomizationsInput { get; }
```

- *Type:* object

---

##### `WidgetVersionInput`<sup>Optional</sup> <a name="WidgetVersionInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput"></a>

```csharp
public string WidgetVersionInput { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent"></a>

```csharp
public string PageContent { get; }
```

- *Type:* string

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion"></a>

```csharp
public string WidgetVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomizedSigninPageConfig <a name="CustomizedSigninPageConfig" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrandId,
    string PageContent,
    string WidgetVersion,
    CustomizedSigninPageContentSecurityPolicySetting ContentSecurityPolicySetting = null,
    CustomizedSigninPageWidgetCustomizations WidgetCustomizations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId">BrandId</a></code> | <code>string</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent">PageContent</a></code> | <code>string</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion">WidgetVersion</a></code> | <code>string</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent"></a>

```csharp
public string PageContent { get; set; }
```

- *Type:* string

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion"></a>

```csharp
public string WidgetVersion { get; set; }
```

- *Type:* string

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `ContentSecurityPolicySetting`<sup>Optional</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting"></a>

```csharp
public CustomizedSigninPageContentSecurityPolicySetting ContentSecurityPolicySetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

##### `WidgetCustomizations`<sup>Optional</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations"></a>

```csharp
public CustomizedSigninPageWidgetCustomizations WidgetCustomizations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}

---

### CustomizedSigninPageContentSecurityPolicySetting <a name="CustomizedSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPageContentSecurityPolicySetting {
    string Mode = null,
    string ReportUri = null,
    string[] SrcList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode">Mode</a></code> | <code>string</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri">ReportUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList">SrcList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

##### `ReportUri`<sup>Optional</sup> <a name="ReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```csharp
public string ReportUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

##### `SrcList`<sup>Optional</sup> <a name="SrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList"></a>

```csharp
public string[] SrcList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

### CustomizedSigninPageWidgetCustomizations <a name="CustomizedSigninPageWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPageWidgetCustomizations {
    string WidgetGeneration,
    string AuthenticatorPageCustomLinkLabel = null,
    string AuthenticatorPageCustomLinkUrl = null,
    string ClassicRecoveryFlowEmailOrUsernameLabel = null,
    string CustomLink1Label = null,
    string CustomLink1Url = null,
    string CustomLink2Label = null,
    string CustomLink2Url = null,
    string ForgotPasswordLabel = null,
    string ForgotPasswordUrl = null,
    string HelpLabel = null,
    string HelpUrl = null,
    string PasswordInfoTip = null,
    string PasswordLabel = null,
    object ShowPasswordVisibilityToggle = null,
    object ShowUserIdentifier = null,
    string SignInLabel = null,
    string UnlockAccountLabel = null,
    string UnlockAccountUrl = null,
    string UsernameInfoTip = null,
    string UsernameLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration">WidgetGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label">CustomLink1Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url">CustomLink1Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label">CustomLink2Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url">CustomLink2Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel">HelpLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl">HelpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel">PasswordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel">SignInLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel">UsernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}. |

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```csharp
public string WidgetGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```csharp
public string AuthenticatorPageCustomLinkLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```csharp
public string AuthenticatorPageCustomLinkUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `CustomLink1Label`<sup>Optional</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label"></a>

```csharp
public string CustomLink1Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

##### `CustomLink1Url`<sup>Optional</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url"></a>

```csharp
public string CustomLink1Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

##### `CustomLink2Label`<sup>Optional</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label"></a>

```csharp
public string CustomLink2Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

##### `CustomLink2Url`<sup>Optional</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url"></a>

```csharp
public string CustomLink2Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

##### `ForgotPasswordLabel`<sup>Optional</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```csharp
public string ForgotPasswordLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

##### `ForgotPasswordUrl`<sup>Optional</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```csharp
public string ForgotPasswordUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

##### `HelpLabel`<sup>Optional</sup> <a name="HelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel"></a>

```csharp
public string HelpLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

##### `HelpUrl`<sup>Optional</sup> <a name="HelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl"></a>

```csharp
public string HelpUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

##### `PasswordInfoTip`<sup>Optional</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```csharp
public string PasswordInfoTip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

##### `PasswordLabel`<sup>Optional</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel"></a>

```csharp
public string PasswordLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

##### `ShowPasswordVisibilityToggle`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```csharp
public object ShowPasswordVisibilityToggle { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

##### `ShowUserIdentifier`<sup>Optional</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```csharp
public object ShowUserIdentifier { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

##### `SignInLabel`<sup>Optional</sup> <a name="SignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel"></a>

```csharp
public string SignInLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

##### `UnlockAccountLabel`<sup>Optional</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```csharp
public string UnlockAccountLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

##### `UnlockAccountUrl`<sup>Optional</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```csharp
public string UnlockAccountUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

##### `UsernameInfoTip`<sup>Optional</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```csharp
public string UsernameInfoTip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

##### `UsernameLabel`<sup>Optional</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel"></a>

```csharp
public string UsernameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomizedSigninPageContentSecurityPolicySettingOutputReference <a name="CustomizedSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPageContentSecurityPolicySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">ResetReportUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">ResetSrcList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetReportUri` <a name="ResetReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```csharp
private void ResetReportUri()
```

##### `ResetSrcList` <a name="ResetSrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```csharp
private void ResetSrcList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">ReportUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">SrcListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">ReportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList">SrcList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ReportUriInput`<sup>Optional</sup> <a name="ReportUriInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```csharp
public string ReportUriInput { get; }
```

- *Type:* string

---

##### `SrcListInput`<sup>Optional</sup> <a name="SrcListInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```csharp
public string[] SrcListInput { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ReportUri`<sup>Required</sup> <a name="ReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```csharp
public string ReportUri { get; }
```

- *Type:* string

---

##### `SrcList`<sup>Required</sup> <a name="SrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```csharp
public string[] SrcList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomizedSigninPageWidgetCustomizationsOutputReference <a name="CustomizedSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CustomizedSigninPageWidgetCustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">ResetAuthenticatorPageCustomLinkLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">ResetAuthenticatorPageCustomLinkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">ResetClassicRecoveryFlowEmailOrUsernameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">ResetCustomLink1Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">ResetCustomLink1Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">ResetCustomLink2Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">ResetCustomLink2Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">ResetForgotPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">ResetForgotPasswordUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">ResetHelpLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">ResetHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">ResetPasswordInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">ResetPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">ResetShowPasswordVisibilityToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">ResetShowUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">ResetSignInLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">ResetUnlockAccountLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">ResetUnlockAccountUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">ResetUsernameInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">ResetUsernameLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticatorPageCustomLinkLabel` <a name="ResetAuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```csharp
private void ResetAuthenticatorPageCustomLinkLabel()
```

##### `ResetAuthenticatorPageCustomLinkUrl` <a name="ResetAuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```csharp
private void ResetAuthenticatorPageCustomLinkUrl()
```

##### `ResetClassicRecoveryFlowEmailOrUsernameLabel` <a name="ResetClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
private void ResetClassicRecoveryFlowEmailOrUsernameLabel()
```

##### `ResetCustomLink1Label` <a name="ResetCustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```csharp
private void ResetCustomLink1Label()
```

##### `ResetCustomLink1Url` <a name="ResetCustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```csharp
private void ResetCustomLink1Url()
```

##### `ResetCustomLink2Label` <a name="ResetCustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```csharp
private void ResetCustomLink2Label()
```

##### `ResetCustomLink2Url` <a name="ResetCustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```csharp
private void ResetCustomLink2Url()
```

##### `ResetForgotPasswordLabel` <a name="ResetForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```csharp
private void ResetForgotPasswordLabel()
```

##### `ResetForgotPasswordUrl` <a name="ResetForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```csharp
private void ResetForgotPasswordUrl()
```

##### `ResetHelpLabel` <a name="ResetHelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```csharp
private void ResetHelpLabel()
```

##### `ResetHelpUrl` <a name="ResetHelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```csharp
private void ResetHelpUrl()
```

##### `ResetPasswordInfoTip` <a name="ResetPasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```csharp
private void ResetPasswordInfoTip()
```

##### `ResetPasswordLabel` <a name="ResetPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```csharp
private void ResetPasswordLabel()
```

##### `ResetShowPasswordVisibilityToggle` <a name="ResetShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```csharp
private void ResetShowPasswordVisibilityToggle()
```

##### `ResetShowUserIdentifier` <a name="ResetShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```csharp
private void ResetShowUserIdentifier()
```

##### `ResetSignInLabel` <a name="ResetSignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```csharp
private void ResetSignInLabel()
```

##### `ResetUnlockAccountLabel` <a name="ResetUnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```csharp
private void ResetUnlockAccountLabel()
```

##### `ResetUnlockAccountUrl` <a name="ResetUnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```csharp
private void ResetUnlockAccountUrl()
```

##### `ResetUsernameInfoTip` <a name="ResetUsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```csharp
private void ResetUsernameInfoTip()
```

##### `ResetUsernameLabel` <a name="ResetUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```csharp
private void ResetUsernameLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">AuthenticatorPageCustomLinkLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">AuthenticatorPageCustomLinkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">ClassicRecoveryFlowEmailOrUsernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">CustomLink1LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">CustomLink1UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">CustomLink2LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">CustomLink2UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">ForgotPasswordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">ForgotPasswordUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">HelpLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">HelpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">PasswordInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">PasswordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">ShowPasswordVisibilityToggleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">ShowUserIdentifierInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">SignInLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">UnlockAccountLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">UnlockAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">UsernameInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">UsernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">WidgetGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">CustomLink1Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">CustomLink1Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">CustomLink2Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">CustomLink2Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel">HelpLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl">HelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">PasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel">SignInLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">UsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">WidgetGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkLabelInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```csharp
public string AuthenticatorPageCustomLinkLabelInput { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkUrlInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```csharp
public string AuthenticatorPageCustomLinkUrlInput { get; }
```

- *Type:* string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabelInput`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabelInput { get; }
```

- *Type:* string

---

##### `CustomLink1LabelInput`<sup>Optional</sup> <a name="CustomLink1LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```csharp
public string CustomLink1LabelInput { get; }
```

- *Type:* string

---

##### `CustomLink1UrlInput`<sup>Optional</sup> <a name="CustomLink1UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```csharp
public string CustomLink1UrlInput { get; }
```

- *Type:* string

---

##### `CustomLink2LabelInput`<sup>Optional</sup> <a name="CustomLink2LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```csharp
public string CustomLink2LabelInput { get; }
```

- *Type:* string

---

##### `CustomLink2UrlInput`<sup>Optional</sup> <a name="CustomLink2UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```csharp
public string CustomLink2UrlInput { get; }
```

- *Type:* string

---

##### `ForgotPasswordLabelInput`<sup>Optional</sup> <a name="ForgotPasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```csharp
public string ForgotPasswordLabelInput { get; }
```

- *Type:* string

---

##### `ForgotPasswordUrlInput`<sup>Optional</sup> <a name="ForgotPasswordUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```csharp
public string ForgotPasswordUrlInput { get; }
```

- *Type:* string

---

##### `HelpLabelInput`<sup>Optional</sup> <a name="HelpLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```csharp
public string HelpLabelInput { get; }
```

- *Type:* string

---

##### `HelpUrlInput`<sup>Optional</sup> <a name="HelpUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```csharp
public string HelpUrlInput { get; }
```

- *Type:* string

---

##### `PasswordInfoTipInput`<sup>Optional</sup> <a name="PasswordInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```csharp
public string PasswordInfoTipInput { get; }
```

- *Type:* string

---

##### `PasswordLabelInput`<sup>Optional</sup> <a name="PasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```csharp
public string PasswordLabelInput { get; }
```

- *Type:* string

---

##### `ShowPasswordVisibilityToggleInput`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggleInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```csharp
public object ShowPasswordVisibilityToggleInput { get; }
```

- *Type:* object

---

##### `ShowUserIdentifierInput`<sup>Optional</sup> <a name="ShowUserIdentifierInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```csharp
public object ShowUserIdentifierInput { get; }
```

- *Type:* object

---

##### `SignInLabelInput`<sup>Optional</sup> <a name="SignInLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```csharp
public string SignInLabelInput { get; }
```

- *Type:* string

---

##### `UnlockAccountLabelInput`<sup>Optional</sup> <a name="UnlockAccountLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```csharp
public string UnlockAccountLabelInput { get; }
```

- *Type:* string

---

##### `UnlockAccountUrlInput`<sup>Optional</sup> <a name="UnlockAccountUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```csharp
public string UnlockAccountUrlInput { get; }
```

- *Type:* string

---

##### `UsernameInfoTipInput`<sup>Optional</sup> <a name="UsernameInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```csharp
public string UsernameInfoTipInput { get; }
```

- *Type:* string

---

##### `UsernameLabelInput`<sup>Optional</sup> <a name="UsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```csharp
public string UsernameLabelInput { get; }
```

- *Type:* string

---

##### `WidgetGenerationInput`<sup>Optional</sup> <a name="WidgetGenerationInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```csharp
public string WidgetGenerationInput { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```csharp
public string AuthenticatorPageCustomLinkLabel { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```csharp
public string AuthenticatorPageCustomLinkUrl { get; }
```

- *Type:* string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabel { get; }
```

- *Type:* string

---

##### `CustomLink1Label`<sup>Required</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```csharp
public string CustomLink1Label { get; }
```

- *Type:* string

---

##### `CustomLink1Url`<sup>Required</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```csharp
public string CustomLink1Url { get; }
```

- *Type:* string

---

##### `CustomLink2Label`<sup>Required</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```csharp
public string CustomLink2Label { get; }
```

- *Type:* string

---

##### `CustomLink2Url`<sup>Required</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```csharp
public string CustomLink2Url { get; }
```

- *Type:* string

---

##### `ForgotPasswordLabel`<sup>Required</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```csharp
public string ForgotPasswordLabel { get; }
```

- *Type:* string

---

##### `ForgotPasswordUrl`<sup>Required</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```csharp
public string ForgotPasswordUrl { get; }
```

- *Type:* string

---

##### `HelpLabel`<sup>Required</sup> <a name="HelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```csharp
public string HelpLabel { get; }
```

- *Type:* string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```csharp
public string HelpUrl { get; }
```

- *Type:* string

---

##### `PasswordInfoTip`<sup>Required</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```csharp
public string PasswordInfoTip { get; }
```

- *Type:* string

---

##### `PasswordLabel`<sup>Required</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```csharp
public string PasswordLabel { get; }
```

- *Type:* string

---

##### `ShowPasswordVisibilityToggle`<sup>Required</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```csharp
public object ShowPasswordVisibilityToggle { get; }
```

- *Type:* object

---

##### `ShowUserIdentifier`<sup>Required</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```csharp
public object ShowUserIdentifier { get; }
```

- *Type:* object

---

##### `SignInLabel`<sup>Required</sup> <a name="SignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```csharp
public string SignInLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountLabel`<sup>Required</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```csharp
public string UnlockAccountLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountUrl`<sup>Required</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```csharp
public string UnlockAccountUrl { get; }
```

- *Type:* string

---

##### `UsernameInfoTip`<sup>Required</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```csharp
public string UsernameInfoTip { get; }
```

- *Type:* string

---

##### `UsernameLabel`<sup>Required</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```csharp
public string UsernameLabel { get; }
```

- *Type:* string

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```csharp
public string WidgetGeneration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



