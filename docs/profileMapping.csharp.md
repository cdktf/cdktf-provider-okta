# `okta_profile_mapping`

Refer to the Terraform Registory for docs: [`okta_profile_mapping`](https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping).

# `profileMapping` Submodule <a name="`profileMapping` Submodule" id="@cdktf/provider-okta.profileMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProfileMapping <a name="ProfileMapping" id="@cdktf/provider-okta.profileMapping.ProfileMapping"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping okta_profile_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ProfileMapping(Construct Scope, string Id, ProfileMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig">ProfileMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig">ProfileMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings">PutMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply">ResetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent">ResetDeleteWhenAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings">ResetMappings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMappings` <a name="PutMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings"></a>

```csharp
private void PutMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysApply` <a name="ResetAlwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply"></a>

```csharp
private void ResetAlwaysApply()
```

##### `ResetDeleteWhenAbsent` <a name="ResetDeleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent"></a>

```csharp
private void ResetDeleteWhenAbsent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMappings` <a name="ResetMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings"></a>

```csharp
private void ResetMappings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ProfileMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ProfileMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

ProfileMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings">Mappings</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput">AlwaysApplyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput">DeleteWhenAbsentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput">MappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput">SourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent">DeleteWhenAbsent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings"></a>

```csharp
public ProfileMappingMappingsList Mappings { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a>

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `AlwaysApplyInput`<sup>Optional</sup> <a name="AlwaysApplyInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput"></a>

```csharp
public object AlwaysApplyInput { get; }
```

- *Type:* object

---

##### `DeleteWhenAbsentInput`<sup>Optional</sup> <a name="DeleteWhenAbsentInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput"></a>

```csharp
public object DeleteWhenAbsentInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput"></a>

```csharp
public object MappingsInput { get; }
```

- *Type:* object

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput"></a>

```csharp
public string SourceIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `AlwaysApply`<sup>Required</sup> <a name="AlwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; }
```

- *Type:* object

---

##### `DeleteWhenAbsent`<sup>Required</sup> <a name="DeleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent"></a>

```csharp
public object DeleteWhenAbsent { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProfileMappingConfig <a name="ProfileMappingConfig" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ProfileMappingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SourceId,
    string TargetId,
    object AlwaysApply = null,
    object DeleteWhenAbsent = null,
    string Id = null,
    object Mappings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId">SourceId</a></code> | <code>string</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId">TargetId</a></code> | <code>string</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent">DeleteWhenAbsent</a></code> | <code>object</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings">Mappings</a></code> | <code>object</code> | mappings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId"></a>

```csharp
public string SourceId { get; set; }
```

- *Type:* string

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `AlwaysApply`<sup>Optional</sup> <a name="AlwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; set; }
```

- *Type:* object

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `DeleteWhenAbsent`<sup>Optional</sup> <a name="DeleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent"></a>

```csharp
public object DeleteWhenAbsent { get; set; }
```

- *Type:* object

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mappings`<sup>Optional</sup> <a name="Mappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings"></a>

```csharp
public object Mappings { get; set; }
```

- *Type:* object

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

### ProfileMappingMappings <a name="ProfileMappingMappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ProfileMappingMappings {
    string Expression,
    string Id,
    string PushStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#expression ProfileMapping#expression}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id">Id</a></code> | <code>string</code> | The mapping property key. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus">PushStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#push_status ProfileMapping#push_status}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#expression ProfileMapping#expression}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The mapping property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#id ProfileMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushStatus`<sup>Optional</sup> <a name="PushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus"></a>

```csharp
public string PushStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/resources/profile_mapping#push_status ProfileMapping#push_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProfileMappingMappingsList <a name="ProfileMappingMappingsList" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ProfileMappingMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get"></a>

```csharp
private ProfileMappingMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProfileMappingMappingsOutputReference <a name="ProfileMappingMappingsOutputReference" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ProfileMappingMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus">ResetPushStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPushStatus` <a name="ResetPushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus"></a>

```csharp
private void ResetPushStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput">PushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus">PushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PushStatusInput`<sup>Optional</sup> <a name="PushStatusInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput"></a>

```csharp
public string PushStatusInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PushStatus`<sup>Required</sup> <a name="PushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus"></a>

```csharp
public string PushStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



