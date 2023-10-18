# `okta_email_customization`

Refer to the Terraform Registory for docs: [`okta_email_customization`](https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization).

# `emailCustomization` Submodule <a name="`emailCustomization` Submodule" id="@cdktf/provider-okta.emailCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCustomization <a name="EmailCustomization" id="@cdktf/provider-okta.emailCustomization.EmailCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization okta_email_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new EmailCustomization(Construct Scope, string Id, EmailCustomizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig">EmailCustomizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig">EmailCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault">ResetForceIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetForceIsDefault` <a name="ResetForceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault"></a>

```csharp
private void ResetForceIsDefault()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject"></a>

```csharp
private void ResetSubject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

EmailCustomization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

EmailCustomization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

EmailCustomization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

EmailCustomization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailCustomization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links">Links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput">ForceIsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault">ForceIsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links"></a>

```csharp
public string Links { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `ForceIsDefaultInput`<sup>Optional</sup> <a name="ForceIsDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput"></a>

```csharp
public string ForceIsDefaultInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `ForceIsDefault`<sup>Required</sup> <a name="ForceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault"></a>

```csharp
public string ForceIsDefault { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCustomizationConfig <a name="EmailCustomizationConfig" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new EmailCustomizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrandId,
    string TemplateName,
    string Body = null,
    string ForceIsDefault = null,
    object IsDefault = null,
    string Language = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId">BrandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Template Name. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body">Body</a></code> | <code>string</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault">ForceIsDefault</a></code> | <code>string</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault">IsDefault</a></code> | <code>object</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language">Language</a></code> | <code>string</code> | The language supported by the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject">Subject</a></code> | <code>string</code> | The subject of the customization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Template Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `ForceIsDefault`<sup>Optional</sup> <a name="ForceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault"></a>

```csharp
public string ForceIsDefault { get; set; }
```

- *Type:* string

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The language supported by the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/email_customization#subject EmailCustomization#subject}

---



