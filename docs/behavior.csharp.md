# `behavior` Submodule <a name="`behavior` Submodule" id="@cdktf/provider-okta.behavior"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Behavior <a name="Behavior" id="@cdktf/provider-okta.behavior.Behavior"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/behavior okta_behavior}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.behavior.Behavior.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new Behavior(Construct Scope, string Id, BehaviorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig">BehaviorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.behavior.BehaviorConfig">BehaviorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType">ResetLocationGranularityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications">ResetNumberOfAuthentications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation">ResetRadiusFromLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetVelocity">ResetVelocity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.behavior.Behavior.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.behavior.Behavior.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.behavior.Behavior.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.behavior.Behavior.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.behavior.Behavior.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationGranularityType` <a name="ResetLocationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType"></a>

```csharp
private void ResetLocationGranularityType()
```

##### `ResetNumberOfAuthentications` <a name="ResetNumberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications"></a>

```csharp
private void ResetNumberOfAuthentications()
```

##### `ResetRadiusFromLocation` <a name="ResetRadiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation"></a>

```csharp
private void ResetRadiusFromLocation()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.behavior.Behavior.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVelocity` <a name="ResetVelocity" id="@cdktf/provider-okta.behavior.Behavior.resetVelocity"></a>

```csharp
private void ResetVelocity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.behavior.Behavior.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Behavior.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.behavior.Behavior.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Behavior.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Behavior.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput">LocationGranularityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput">NumberOfAuthenticationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput">RadiusFromLocationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocityInput">VelocityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType">LocationGranularityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications">NumberOfAuthentications</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation">RadiusFromLocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocity">Velocity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.behavior.Behavior.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.behavior.Behavior.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.behavior.Behavior.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.behavior.Behavior.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.behavior.Behavior.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.behavior.Behavior.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.behavior.Behavior.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.behavior.Behavior.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.behavior.Behavior.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.behavior.Behavior.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.behavior.Behavior.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationGranularityTypeInput`<sup>Optional</sup> <a name="LocationGranularityTypeInput" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput"></a>

```csharp
public string LocationGranularityTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.behavior.Behavior.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfAuthenticationsInput`<sup>Optional</sup> <a name="NumberOfAuthenticationsInput" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput"></a>

```csharp
public double NumberOfAuthenticationsInput { get; }
```

- *Type:* double

---

##### `RadiusFromLocationInput`<sup>Optional</sup> <a name="RadiusFromLocationInput" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput"></a>

```csharp
public double RadiusFromLocationInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.behavior.Behavior.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.behavior.Behavior.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VelocityInput`<sup>Optional</sup> <a name="VelocityInput" id="@cdktf/provider-okta.behavior.Behavior.property.velocityInput"></a>

```csharp
public double VelocityInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.behavior.Behavior.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationGranularityType`<sup>Required</sup> <a name="LocationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType"></a>

```csharp
public string LocationGranularityType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.behavior.Behavior.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfAuthentications`<sup>Required</sup> <a name="NumberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications"></a>

```csharp
public double NumberOfAuthentications { get; }
```

- *Type:* double

---

##### `RadiusFromLocation`<sup>Required</sup> <a name="RadiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation"></a>

```csharp
public double RadiusFromLocation { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.behavior.Behavior.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.behavior.Behavior.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Velocity`<sup>Required</sup> <a name="Velocity" id="@cdktf/provider-okta.behavior.Behavior.property.velocity"></a>

```csharp
public double Velocity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BehaviorConfig <a name="BehaviorConfig" id="@cdktf/provider-okta.behavior.BehaviorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.behavior.BehaviorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new BehaviorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string Id = null,
    string LocationGranularityType = null,
    double NumberOfAuthentications = null,
    double RadiusFromLocation = null,
    string Status = null,
    double Velocity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.name">Name</a></code> | <code>string</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.type">Type</a></code> | <code>string</code> | Behavior type. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType">LocationGranularityType</a></code> | <code>string</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications">NumberOfAuthentications</a></code> | <code>double</code> | The number of recent authentications used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation">RadiusFromLocation</a></code> | <code>double</code> | Radius from location (in kilometers). |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.status">Status</a></code> | <code>string</code> | Behavior status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity">Velocity</a></code> | <code>double</code> | Velocity (in kilometers per hour). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#name Behavior#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Behavior type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#type Behavior#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationGranularityType`<sup>Optional</sup> <a name="LocationGranularityType" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType"></a>

```csharp
public string LocationGranularityType { get; set; }
```

- *Type:* string

Determines the method and level of detail used to evaluate the behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `NumberOfAuthentications`<sup>Optional</sup> <a name="NumberOfAuthentications" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications"></a>

```csharp
public double NumberOfAuthentications { get; set; }
```

- *Type:* double

The number of recent authentications used to evaluate the behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `RadiusFromLocation`<sup>Optional</sup> <a name="RadiusFromLocation" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation"></a>

```csharp
public double RadiusFromLocation { get; set; }
```

- *Type:* double

Radius from location (in kilometers).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#radius_from_location Behavior#radius_from_location}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Behavior status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#status Behavior#status}

---

##### `Velocity`<sup>Optional</sup> <a name="Velocity" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity"></a>

```csharp
public double Velocity { get; set; }
```

- *Type:* double

Velocity (in kilometers per hour).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/behavior#velocity Behavior#velocity}

---


