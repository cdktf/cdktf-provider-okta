# `captchaOrgWideSettings` Submodule <a name="`captchaOrgWideSettings` Submodule" id="@cdktf/provider-okta.captchaOrgWideSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CaptchaOrgWideSettings <a name="CaptchaOrgWideSettings" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CaptchaOrgWideSettings(Construct Scope, string Id, CaptchaOrgWideSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId">ResetCaptchaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor">ResetEnabledFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCaptchaId` <a name="ResetCaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId"></a>

```csharp
private void ResetCaptchaId()
```

##### `ResetEnabledFor` <a name="ResetEnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor"></a>

```csharp
private void ResetEnabledFor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CaptchaOrgWideSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CaptchaOrgWideSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CaptchaOrgWideSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

CaptchaOrgWideSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CaptchaOrgWideSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CaptchaOrgWideSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CaptchaOrgWideSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput">CaptchaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput">EnabledForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId">CaptchaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor">EnabledFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CaptchaIdInput`<sup>Optional</sup> <a name="CaptchaIdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput"></a>

```csharp
public string CaptchaIdInput { get; }
```

- *Type:* string

---

##### `EnabledForInput`<sup>Optional</sup> <a name="EnabledForInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput"></a>

```csharp
public string[] EnabledForInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CaptchaId`<sup>Required</sup> <a name="CaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId"></a>

```csharp
public string CaptchaId { get; }
```

- *Type:* string

---

##### `EnabledFor`<sup>Required</sup> <a name="EnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor"></a>

```csharp
public string[] EnabledFor { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CaptchaOrgWideSettingsConfig <a name="CaptchaOrgWideSettingsConfig" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new CaptchaOrgWideSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CaptchaId = null,
    string[] EnabledFor = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId">CaptchaId</a></code> | <code>string</code> | Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor">EnabledFor</a></code> | <code>string[]</code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CaptchaId`<sup>Optional</sup> <a name="CaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId"></a>

```csharp
public string CaptchaId { get; set; }
```

- *Type:* string

Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `EnabledFor`<sup>Optional</sup> <a name="EnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor"></a>

```csharp
public string[] EnabledFor { get; set; }
```

- *Type:* string[]

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



