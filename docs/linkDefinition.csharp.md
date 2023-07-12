# `okta_link_definition`

Refer to the Terraform Registory for docs: [`okta_link_definition`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition).

# `linkDefinition` Submodule <a name="`linkDefinition` Submodule" id="@cdktf/provider-okta.linkDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinkDefinition <a name="LinkDefinition" id="@cdktf/provider-okta.linkDefinition.LinkDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition okta_link_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new LinkDefinition(Construct Scope, string Id, LinkDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

LinkDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

LinkDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

LinkDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput">AssociatedDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput">AssociatedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput">AssociatedTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput">PrimaryDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput">PrimaryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput">PrimaryTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription">AssociatedDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName">AssociatedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle">AssociatedTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription">PrimaryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName">PrimaryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle">PrimaryTitle</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedDescriptionInput`<sup>Optional</sup> <a name="AssociatedDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput"></a>

```csharp
public string AssociatedDescriptionInput { get; }
```

- *Type:* string

---

##### `AssociatedNameInput`<sup>Optional</sup> <a name="AssociatedNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput"></a>

```csharp
public string AssociatedNameInput { get; }
```

- *Type:* string

---

##### `AssociatedTitleInput`<sup>Optional</sup> <a name="AssociatedTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput"></a>

```csharp
public string AssociatedTitleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrimaryDescriptionInput`<sup>Optional</sup> <a name="PrimaryDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput"></a>

```csharp
public string PrimaryDescriptionInput { get; }
```

- *Type:* string

---

##### `PrimaryNameInput`<sup>Optional</sup> <a name="PrimaryNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput"></a>

```csharp
public string PrimaryNameInput { get; }
```

- *Type:* string

---

##### `PrimaryTitleInput`<sup>Optional</sup> <a name="PrimaryTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput"></a>

```csharp
public string PrimaryTitleInput { get; }
```

- *Type:* string

---

##### `AssociatedDescription`<sup>Required</sup> <a name="AssociatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription"></a>

```csharp
public string AssociatedDescription { get; }
```

- *Type:* string

---

##### `AssociatedName`<sup>Required</sup> <a name="AssociatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName"></a>

```csharp
public string AssociatedName { get; }
```

- *Type:* string

---

##### `AssociatedTitle`<sup>Required</sup> <a name="AssociatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle"></a>

```csharp
public string AssociatedTitle { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrimaryDescription`<sup>Required</sup> <a name="PrimaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription"></a>

```csharp
public string PrimaryDescription { get; }
```

- *Type:* string

---

##### `PrimaryName`<sup>Required</sup> <a name="PrimaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName"></a>

```csharp
public string PrimaryName { get; }
```

- *Type:* string

---

##### `PrimaryTitle`<sup>Required</sup> <a name="PrimaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle"></a>

```csharp
public string PrimaryTitle { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LinkDefinitionConfig <a name="LinkDefinitionConfig" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new LinkDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssociatedDescription,
    string AssociatedName,
    string AssociatedTitle,
    string PrimaryDescription,
    string PrimaryName,
    string PrimaryTitle,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription">AssociatedDescription</a></code> | <code>string</code> | Description of the associated relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName">AssociatedName</a></code> | <code>string</code> | API name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle">AssociatedTitle</a></code> | <code>string</code> | Display name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription">PrimaryDescription</a></code> | <code>string</code> | Description of the primary relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName">PrimaryName</a></code> | <code>string</code> | API name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle">PrimaryTitle</a></code> | <code>string</code> | Display name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#id LinkDefinition#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssociatedDescription`<sup>Required</sup> <a name="AssociatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription"></a>

```csharp
public string AssociatedDescription { get; set; }
```

- *Type:* string

Description of the associated relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#associated_description LinkDefinition#associated_description}

---

##### `AssociatedName`<sup>Required</sup> <a name="AssociatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName"></a>

```csharp
public string AssociatedName { get; set; }
```

- *Type:* string

API name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#associated_name LinkDefinition#associated_name}

---

##### `AssociatedTitle`<sup>Required</sup> <a name="AssociatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle"></a>

```csharp
public string AssociatedTitle { get; set; }
```

- *Type:* string

Display name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#associated_title LinkDefinition#associated_title}

---

##### `PrimaryDescription`<sup>Required</sup> <a name="PrimaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription"></a>

```csharp
public string PrimaryDescription { get; set; }
```

- *Type:* string

Description of the primary relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#primary_description LinkDefinition#primary_description}

---

##### `PrimaryName`<sup>Required</sup> <a name="PrimaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName"></a>

```csharp
public string PrimaryName { get; set; }
```

- *Type:* string

API name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#primary_name LinkDefinition#primary_name}

---

##### `PrimaryTitle`<sup>Required</sup> <a name="PrimaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle"></a>

```csharp
public string PrimaryTitle { get; set; }
```

- *Type:* string

Display name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#primary_title LinkDefinition#primary_title}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/link_definition#id LinkDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



