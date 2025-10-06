# `previewSigninPage` Submodule <a name="`previewSigninPage` Submodule" id="@cdktf/provider-okta.previewSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreviewSigninPage <a name="PreviewSigninPage" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page okta_preview_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPage(Construct Scope, string Id, PreviewSigninPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig">PreviewSigninPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig">PreviewSigninPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting">PutContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations">PutWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetContentSecurityPolicySetting">ResetContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetWidgetCustomizations">ResetWidgetCustomizations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentSecurityPolicySetting` <a name="PutContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting"></a>

```csharp
private void PutContentSecurityPolicySetting(PreviewSigninPageContentSecurityPolicySetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putContentSecurityPolicySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

---

##### `PutWidgetCustomizations` <a name="PutWidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations"></a>

```csharp
private void PutWidgetCustomizations(PreviewSigninPageWidgetCustomizations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.putWidgetCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

---

##### `ResetContentSecurityPolicySetting` <a name="ResetContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetContentSecurityPolicySetting"></a>

```csharp
private void ResetContentSecurityPolicySetting()
```

##### `ResetWidgetCustomizations` <a name="ResetWidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.resetWidgetCustomizations"></a>

```csharp
private void ResetWidgetCustomizations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PreviewSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PreviewSigninPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PreviewSigninPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PreviewSigninPage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PreviewSigninPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PreviewSigninPage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PreviewSigninPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PreviewSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PreviewSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference">PreviewSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference">PreviewSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySettingInput">ContentSecurityPolicySettingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContentInput">PageContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizationsInput">WidgetCustomizationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersionInput">WidgetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContent">PageContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersion">WidgetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ContentSecurityPolicySetting`<sup>Required</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySetting"></a>

```csharp
public PreviewSigninPageContentSecurityPolicySettingOutputReference ContentSecurityPolicySetting { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference">PreviewSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WidgetCustomizations`<sup>Required</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizations"></a>

```csharp
public PreviewSigninPageWidgetCustomizationsOutputReference WidgetCustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference">PreviewSigninPageWidgetCustomizationsOutputReference</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `ContentSecurityPolicySettingInput`<sup>Optional</sup> <a name="ContentSecurityPolicySettingInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.contentSecurityPolicySettingInput"></a>

```csharp
public IResolvable|PreviewSigninPageContentSecurityPolicySetting ContentSecurityPolicySettingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

---

##### `PageContentInput`<sup>Optional</sup> <a name="PageContentInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContentInput"></a>

```csharp
public string PageContentInput { get; }
```

- *Type:* string

---

##### `WidgetCustomizationsInput`<sup>Optional</sup> <a name="WidgetCustomizationsInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetCustomizationsInput"></a>

```csharp
public IResolvable|PreviewSigninPageWidgetCustomizations WidgetCustomizationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

---

##### `WidgetVersionInput`<sup>Optional</sup> <a name="WidgetVersionInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersionInput"></a>

```csharp
public string WidgetVersionInput { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.pageContent"></a>

```csharp
public string PageContent { get; }
```

- *Type:* string

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.widgetVersion"></a>

```csharp
public string WidgetVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PreviewSigninPageConfig <a name="PreviewSigninPageConfig" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BrandId,
    string PageContent,
    string WidgetVersion,
    PreviewSigninPageContentSecurityPolicySetting ContentSecurityPolicySetting = null,
    PreviewSigninPageWidgetCustomizations WidgetCustomizations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.brandId">BrandId</a></code> | <code>string</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.pageContent">PageContent</a></code> | <code>string</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetVersion">WidgetVersion</a></code> | <code>string</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#brand_id PreviewSigninPage#brand_id}

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.pageContent"></a>

```csharp
public string PageContent { get; set; }
```

- *Type:* string

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#page_content PreviewSigninPage#page_content}

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetVersion"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#widget_version PreviewSigninPage#widget_version}

---

##### `ContentSecurityPolicySetting`<sup>Optional</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.contentSecurityPolicySetting"></a>

```csharp
public PreviewSigninPageContentSecurityPolicySetting ContentSecurityPolicySetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#content_security_policy_setting PreviewSigninPage#content_security_policy_setting}

---

##### `WidgetCustomizations`<sup>Optional</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageConfig.property.widgetCustomizations"></a>

```csharp
public PreviewSigninPageWidgetCustomizations WidgetCustomizations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#widget_customizations PreviewSigninPage#widget_customizations}

---

### PreviewSigninPageContentSecurityPolicySetting <a name="PreviewSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPageContentSecurityPolicySetting {
    string Mode = null,
    string ReportUri = null,
    string[] SrcList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.mode">Mode</a></code> | <code>string</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.reportUri">ReportUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#report_uri PreviewSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.srcList">SrcList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#src_list PreviewSigninPage#src_list}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#mode PreviewSigninPage#mode}

---

##### `ReportUri`<sup>Optional</sup> <a name="ReportUri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```csharp
public string ReportUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#report_uri PreviewSigninPage#report_uri}.

---

##### `SrcList`<sup>Optional</sup> <a name="SrcList" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting.property.srcList"></a>

```csharp
public string[] SrcList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#src_list PreviewSigninPage#src_list}.

---

### PreviewSigninPageWidgetCustomizations <a name="PreviewSigninPageWidgetCustomizations" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPageWidgetCustomizations {
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
    bool|IResolvable ShowPasswordVisibilityToggle = null,
    bool|IResolvable ShowUserIdentifier = null,
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
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.widgetGeneration">WidgetGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#widget_generation PreviewSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#authenticator_page_custom_link_label PreviewSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#authenticator_page_custom_link_url PreviewSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#classic_recovery_flow_email_or_username_label PreviewSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Label">CustomLink1Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_1_label PreviewSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Url">CustomLink1Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_1_url PreviewSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Label">CustomLink2Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_2_label PreviewSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Url">CustomLink2Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_2_url PreviewSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#forgot_password_label PreviewSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#forgot_password_url PreviewSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpLabel">HelpLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#help_label PreviewSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpUrl">HelpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#help_url PreviewSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#password_info_tip PreviewSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordLabel">PasswordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#password_label PreviewSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#show_password_visibility_toggle PreviewSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#show_user_identifier PreviewSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.signInLabel">SignInLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#sign_in_label PreviewSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#unlock_account_label PreviewSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#unlock_account_url PreviewSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#username_info_tip PreviewSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameLabel">UsernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#username_label PreviewSigninPage#username_label}. |

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```csharp
public string WidgetGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#widget_generation PreviewSigninPage#widget_generation}.

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```csharp
public string AuthenticatorPageCustomLinkLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#authenticator_page_custom_link_label PreviewSigninPage#authenticator_page_custom_link_label}.

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```csharp
public string AuthenticatorPageCustomLinkUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#authenticator_page_custom_link_url PreviewSigninPage#authenticator_page_custom_link_url}.

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#classic_recovery_flow_email_or_username_label PreviewSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `CustomLink1Label`<sup>Optional</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Label"></a>

```csharp
public string CustomLink1Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_1_label PreviewSigninPage#custom_link_1_label}.

---

##### `CustomLink1Url`<sup>Optional</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink1Url"></a>

```csharp
public string CustomLink1Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_1_url PreviewSigninPage#custom_link_1_url}.

---

##### `CustomLink2Label`<sup>Optional</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Label"></a>

```csharp
public string CustomLink2Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_2_label PreviewSigninPage#custom_link_2_label}.

---

##### `CustomLink2Url`<sup>Optional</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.customLink2Url"></a>

```csharp
public string CustomLink2Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#custom_link_2_url PreviewSigninPage#custom_link_2_url}.

---

##### `ForgotPasswordLabel`<sup>Optional</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```csharp
public string ForgotPasswordLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#forgot_password_label PreviewSigninPage#forgot_password_label}.

---

##### `ForgotPasswordUrl`<sup>Optional</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```csharp
public string ForgotPasswordUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#forgot_password_url PreviewSigninPage#forgot_password_url}.

---

##### `HelpLabel`<sup>Optional</sup> <a name="HelpLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpLabel"></a>

```csharp
public string HelpLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#help_label PreviewSigninPage#help_label}.

---

##### `HelpUrl`<sup>Optional</sup> <a name="HelpUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.helpUrl"></a>

```csharp
public string HelpUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#help_url PreviewSigninPage#help_url}.

---

##### `PasswordInfoTip`<sup>Optional</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```csharp
public string PasswordInfoTip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#password_info_tip PreviewSigninPage#password_info_tip}.

---

##### `PasswordLabel`<sup>Optional</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.passwordLabel"></a>

```csharp
public string PasswordLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#password_label PreviewSigninPage#password_label}.

---

##### `ShowPasswordVisibilityToggle`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```csharp
public bool|IResolvable ShowPasswordVisibilityToggle { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#show_password_visibility_toggle PreviewSigninPage#show_password_visibility_toggle}.

---

##### `ShowUserIdentifier`<sup>Optional</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```csharp
public bool|IResolvable ShowUserIdentifier { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#show_user_identifier PreviewSigninPage#show_user_identifier}.

---

##### `SignInLabel`<sup>Optional</sup> <a name="SignInLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.signInLabel"></a>

```csharp
public string SignInLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#sign_in_label PreviewSigninPage#sign_in_label}.

---

##### `UnlockAccountLabel`<sup>Optional</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```csharp
public string UnlockAccountLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#unlock_account_label PreviewSigninPage#unlock_account_label}.

---

##### `UnlockAccountUrl`<sup>Optional</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```csharp
public string UnlockAccountUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#unlock_account_url PreviewSigninPage#unlock_account_url}.

---

##### `UsernameInfoTip`<sup>Optional</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```csharp
public string UsernameInfoTip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#username_info_tip PreviewSigninPage#username_info_tip}.

---

##### `UsernameLabel`<sup>Optional</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations.property.usernameLabel"></a>

```csharp
public string UsernameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/preview_signin_page#username_label PreviewSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### PreviewSigninPageContentSecurityPolicySettingOutputReference <a name="PreviewSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPageContentSecurityPolicySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">ResetReportUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">ResetSrcList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetReportUri` <a name="ResetReportUri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```csharp
private void ResetReportUri()
```

##### `ResetSrcList` <a name="ResetSrcList" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```csharp
private void ResetSrcList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">ReportUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">SrcListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">ReportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcList">SrcList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ReportUriInput`<sup>Optional</sup> <a name="ReportUriInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```csharp
public string ReportUriInput { get; }
```

- *Type:* string

---

##### `SrcListInput`<sup>Optional</sup> <a name="SrcListInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```csharp
public string[] SrcListInput { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ReportUri`<sup>Required</sup> <a name="ReportUri" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```csharp
public string ReportUri { get; }
```

- *Type:* string

---

##### `SrcList`<sup>Required</sup> <a name="SrcList" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```csharp
public string[] SrcList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PreviewSigninPageContentSecurityPolicySetting InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageContentSecurityPolicySetting">PreviewSigninPageContentSecurityPolicySetting</a>

---


### PreviewSigninPageWidgetCustomizationsOutputReference <a name="PreviewSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PreviewSigninPageWidgetCustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">ResetAuthenticatorPageCustomLinkLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">ResetAuthenticatorPageCustomLinkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">ResetClassicRecoveryFlowEmailOrUsernameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">ResetCustomLink1Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">ResetCustomLink1Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">ResetCustomLink2Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">ResetCustomLink2Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">ResetForgotPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">ResetForgotPasswordUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">ResetHelpLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">ResetHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">ResetPasswordInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">ResetPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">ResetShowPasswordVisibilityToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">ResetShowUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">ResetSignInLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">ResetUnlockAccountLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">ResetUnlockAccountUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">ResetUsernameInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">ResetUsernameLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticatorPageCustomLinkLabel` <a name="ResetAuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```csharp
private void ResetAuthenticatorPageCustomLinkLabel()
```

##### `ResetAuthenticatorPageCustomLinkUrl` <a name="ResetAuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```csharp
private void ResetAuthenticatorPageCustomLinkUrl()
```

##### `ResetClassicRecoveryFlowEmailOrUsernameLabel` <a name="ResetClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
private void ResetClassicRecoveryFlowEmailOrUsernameLabel()
```

##### `ResetCustomLink1Label` <a name="ResetCustomLink1Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```csharp
private void ResetCustomLink1Label()
```

##### `ResetCustomLink1Url` <a name="ResetCustomLink1Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```csharp
private void ResetCustomLink1Url()
```

##### `ResetCustomLink2Label` <a name="ResetCustomLink2Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```csharp
private void ResetCustomLink2Label()
```

##### `ResetCustomLink2Url` <a name="ResetCustomLink2Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```csharp
private void ResetCustomLink2Url()
```

##### `ResetForgotPasswordLabel` <a name="ResetForgotPasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```csharp
private void ResetForgotPasswordLabel()
```

##### `ResetForgotPasswordUrl` <a name="ResetForgotPasswordUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```csharp
private void ResetForgotPasswordUrl()
```

##### `ResetHelpLabel` <a name="ResetHelpLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```csharp
private void ResetHelpLabel()
```

##### `ResetHelpUrl` <a name="ResetHelpUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```csharp
private void ResetHelpUrl()
```

##### `ResetPasswordInfoTip` <a name="ResetPasswordInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```csharp
private void ResetPasswordInfoTip()
```

##### `ResetPasswordLabel` <a name="ResetPasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```csharp
private void ResetPasswordLabel()
```

##### `ResetShowPasswordVisibilityToggle` <a name="ResetShowPasswordVisibilityToggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```csharp
private void ResetShowPasswordVisibilityToggle()
```

##### `ResetShowUserIdentifier` <a name="ResetShowUserIdentifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```csharp
private void ResetShowUserIdentifier()
```

##### `ResetSignInLabel` <a name="ResetSignInLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```csharp
private void ResetSignInLabel()
```

##### `ResetUnlockAccountLabel` <a name="ResetUnlockAccountLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```csharp
private void ResetUnlockAccountLabel()
```

##### `ResetUnlockAccountUrl` <a name="ResetUnlockAccountUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```csharp
private void ResetUnlockAccountUrl()
```

##### `ResetUsernameInfoTip` <a name="ResetUsernameInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```csharp
private void ResetUsernameInfoTip()
```

##### `ResetUsernameLabel` <a name="ResetUsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```csharp
private void ResetUsernameLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">AuthenticatorPageCustomLinkLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">AuthenticatorPageCustomLinkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">ClassicRecoveryFlowEmailOrUsernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">CustomLink1LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">CustomLink1UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">CustomLink2LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">CustomLink2UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">ForgotPasswordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">ForgotPasswordUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">HelpLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">HelpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">PasswordInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">PasswordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">ShowPasswordVisibilityToggleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">ShowUserIdentifierInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">SignInLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">UnlockAccountLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">UnlockAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">UsernameInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">UsernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">WidgetGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">CustomLink1Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">CustomLink1Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">CustomLink2Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">CustomLink2Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabel">HelpLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrl">HelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">PasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabel">SignInLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">UsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">WidgetGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkLabelInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```csharp
public string AuthenticatorPageCustomLinkLabelInput { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkUrlInput`<sup>Optional</sup> <a name="AuthenticatorPageCustomLinkUrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```csharp
public string AuthenticatorPageCustomLinkUrlInput { get; }
```

- *Type:* string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabelInput`<sup>Optional</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabelInput { get; }
```

- *Type:* string

---

##### `CustomLink1LabelInput`<sup>Optional</sup> <a name="CustomLink1LabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```csharp
public string CustomLink1LabelInput { get; }
```

- *Type:* string

---

##### `CustomLink1UrlInput`<sup>Optional</sup> <a name="CustomLink1UrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```csharp
public string CustomLink1UrlInput { get; }
```

- *Type:* string

---

##### `CustomLink2LabelInput`<sup>Optional</sup> <a name="CustomLink2LabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```csharp
public string CustomLink2LabelInput { get; }
```

- *Type:* string

---

##### `CustomLink2UrlInput`<sup>Optional</sup> <a name="CustomLink2UrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```csharp
public string CustomLink2UrlInput { get; }
```

- *Type:* string

---

##### `ForgotPasswordLabelInput`<sup>Optional</sup> <a name="ForgotPasswordLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```csharp
public string ForgotPasswordLabelInput { get; }
```

- *Type:* string

---

##### `ForgotPasswordUrlInput`<sup>Optional</sup> <a name="ForgotPasswordUrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```csharp
public string ForgotPasswordUrlInput { get; }
```

- *Type:* string

---

##### `HelpLabelInput`<sup>Optional</sup> <a name="HelpLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```csharp
public string HelpLabelInput { get; }
```

- *Type:* string

---

##### `HelpUrlInput`<sup>Optional</sup> <a name="HelpUrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```csharp
public string HelpUrlInput { get; }
```

- *Type:* string

---

##### `PasswordInfoTipInput`<sup>Optional</sup> <a name="PasswordInfoTipInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```csharp
public string PasswordInfoTipInput { get; }
```

- *Type:* string

---

##### `PasswordLabelInput`<sup>Optional</sup> <a name="PasswordLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```csharp
public string PasswordLabelInput { get; }
```

- *Type:* string

---

##### `ShowPasswordVisibilityToggleInput`<sup>Optional</sup> <a name="ShowPasswordVisibilityToggleInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```csharp
public bool|IResolvable ShowPasswordVisibilityToggleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ShowUserIdentifierInput`<sup>Optional</sup> <a name="ShowUserIdentifierInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```csharp
public bool|IResolvable ShowUserIdentifierInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SignInLabelInput`<sup>Optional</sup> <a name="SignInLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```csharp
public string SignInLabelInput { get; }
```

- *Type:* string

---

##### `UnlockAccountLabelInput`<sup>Optional</sup> <a name="UnlockAccountLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```csharp
public string UnlockAccountLabelInput { get; }
```

- *Type:* string

---

##### `UnlockAccountUrlInput`<sup>Optional</sup> <a name="UnlockAccountUrlInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```csharp
public string UnlockAccountUrlInput { get; }
```

- *Type:* string

---

##### `UsernameInfoTipInput`<sup>Optional</sup> <a name="UsernameInfoTipInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```csharp
public string UsernameInfoTipInput { get; }
```

- *Type:* string

---

##### `UsernameLabelInput`<sup>Optional</sup> <a name="UsernameLabelInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```csharp
public string UsernameLabelInput { get; }
```

- *Type:* string

---

##### `WidgetGenerationInput`<sup>Optional</sup> <a name="WidgetGenerationInput" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```csharp
public string WidgetGenerationInput { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```csharp
public string AuthenticatorPageCustomLinkLabel { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```csharp
public string AuthenticatorPageCustomLinkUrl { get; }
```

- *Type:* string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabel { get; }
```

- *Type:* string

---

##### `CustomLink1Label`<sup>Required</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```csharp
public string CustomLink1Label { get; }
```

- *Type:* string

---

##### `CustomLink1Url`<sup>Required</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```csharp
public string CustomLink1Url { get; }
```

- *Type:* string

---

##### `CustomLink2Label`<sup>Required</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```csharp
public string CustomLink2Label { get; }
```

- *Type:* string

---

##### `CustomLink2Url`<sup>Required</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```csharp
public string CustomLink2Url { get; }
```

- *Type:* string

---

##### `ForgotPasswordLabel`<sup>Required</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```csharp
public string ForgotPasswordLabel { get; }
```

- *Type:* string

---

##### `ForgotPasswordUrl`<sup>Required</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```csharp
public string ForgotPasswordUrl { get; }
```

- *Type:* string

---

##### `HelpLabel`<sup>Required</sup> <a name="HelpLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```csharp
public string HelpLabel { get; }
```

- *Type:* string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```csharp
public string HelpUrl { get; }
```

- *Type:* string

---

##### `PasswordInfoTip`<sup>Required</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```csharp
public string PasswordInfoTip { get; }
```

- *Type:* string

---

##### `PasswordLabel`<sup>Required</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```csharp
public string PasswordLabel { get; }
```

- *Type:* string

---

##### `ShowPasswordVisibilityToggle`<sup>Required</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```csharp
public bool|IResolvable ShowPasswordVisibilityToggle { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ShowUserIdentifier`<sup>Required</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```csharp
public bool|IResolvable ShowUserIdentifier { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SignInLabel`<sup>Required</sup> <a name="SignInLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```csharp
public string SignInLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountLabel`<sup>Required</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```csharp
public string UnlockAccountLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountUrl`<sup>Required</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```csharp
public string UnlockAccountUrl { get; }
```

- *Type:* string

---

##### `UsernameInfoTip`<sup>Required</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```csharp
public string UsernameInfoTip { get; }
```

- *Type:* string

---

##### `UsernameLabel`<sup>Required</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```csharp
public string UsernameLabel { get; }
```

- *Type:* string

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```csharp
public string WidgetGeneration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PreviewSigninPageWidgetCustomizations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-okta.previewSigninPage.PreviewSigninPageWidgetCustomizations">PreviewSigninPageWidgetCustomizations</a>

---



