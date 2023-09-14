# `okta_network_zone`

Refer to the Terraform Registory for docs: [`okta_network_zone`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone).

# `networkZone` Submodule <a name="`networkZone` Submodule" id="@cdktf/provider-okta.networkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkZone <a name="NetworkZone" id="@cdktf/provider-okta.networkZone.NetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new NetworkZone(Construct Scope, string Id, NetworkZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig">NetworkZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig">NetworkZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetAsns">ResetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations">ResetDynamicLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType">ResetDynamicProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetProxies">ResetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetUsage">ResetUsage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.networkZone.NetworkZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAsns` <a name="ResetAsns" id="@cdktf/provider-okta.networkZone.NetworkZone.resetAsns"></a>

```csharp
private void ResetAsns()
```

##### `ResetDynamicLocations` <a name="ResetDynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations"></a>

```csharp
private void ResetDynamicLocations()
```

##### `ResetDynamicProxyType` <a name="ResetDynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType"></a>

```csharp
private void ResetDynamicProxyType()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-okta.networkZone.NetworkZone.resetGateways"></a>

```csharp
private void ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProxies` <a name="ResetProxies" id="@cdktf/provider-okta.networkZone.NetworkZone.resetProxies"></a>

```csharp
private void ResetProxies()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.networkZone.NetworkZone.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-okta.networkZone.NetworkZone.resetUsage"></a>

```csharp
private void ResetUsage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

NetworkZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

NetworkZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

NetworkZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput">AsnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput">DynamicLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput">DynamicProxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput">GatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput">ProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput">UsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asns">Asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations">DynamicLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType">DynamicProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gateways">Gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxies">Proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usage">Usage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.networkZone.NetworkZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.networkZone.NetworkZone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.networkZone.NetworkZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.networkZone.NetworkZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AsnsInput`<sup>Optional</sup> <a name="AsnsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput"></a>

```csharp
public string[] AsnsInput { get; }
```

- *Type:* string[]

---

##### `DynamicLocationsInput`<sup>Optional</sup> <a name="DynamicLocationsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput"></a>

```csharp
public string[] DynamicLocationsInput { get; }
```

- *Type:* string[]

---

##### `DynamicProxyTypeInput`<sup>Optional</sup> <a name="DynamicProxyTypeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput"></a>

```csharp
public string DynamicProxyTypeInput { get; }
```

- *Type:* string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput"></a>

```csharp
public string[] GatewaysInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProxiesInput`<sup>Optional</sup> <a name="ProxiesInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput"></a>

```csharp
public string[] ProxiesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput"></a>

```csharp
public string UsageInput { get; }
```

- *Type:* string

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asns"></a>

```csharp
public string[] Asns { get; }
```

- *Type:* string[]

---

##### `DynamicLocations`<sup>Required</sup> <a name="DynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations"></a>

```csharp
public string[] DynamicLocations { get; }
```

- *Type:* string[]

---

##### `DynamicProxyType`<sup>Required</sup> <a name="DynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType"></a>

```csharp
public string DynamicProxyType { get; }
```

- *Type:* string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gateways"></a>

```csharp
public string[] Gateways { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.networkZone.NetworkZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.networkZone.NetworkZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Proxies`<sup>Required</sup> <a name="Proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxies"></a>

```csharp
public string[] Proxies { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.networkZone.NetworkZone.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkZoneConfig <a name="NetworkZoneConfig" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new NetworkZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string[] Asns = null,
    string[] DynamicLocations = null,
    string DynamicProxyType = null,
    string[] Gateways = null,
    string Id = null,
    string[] Proxies = null,
    string Status = null,
    string Usage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name">Name</a></code> | <code>string</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type">Type</a></code> | <code>string</code> | Type of the Network Zone - can either be IP or DYNAMIC only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns">Asns</a></code> | <code>string[]</code> | Format of each array value: a string representation of an ASN numeric value. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations">DynamicLocations</a></code> | <code>string[]</code> | Array of locations ISO-3166-1(2). Format code: countryCode OR countryCode-regionCode. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType">DynamicProxyType</a></code> | <code>string</code> | Type of proxy being controlled by this network zone. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways">Gateways</a></code> | <code>string[]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies">Proxies</a></code> | <code>string[]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status">Status</a></code> | <code>string</code> | Network Status - can either be ACTIVE or INACTIVE only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage">Usage</a></code> | <code>string</code> | Zone's purpose: POLICY or BLOCKLIST. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#name NetworkZone#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the Network Zone - can either be IP or DYNAMIC only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#type NetworkZone#type}

---

##### `Asns`<sup>Optional</sup> <a name="Asns" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns"></a>

```csharp
public string[] Asns { get; set; }
```

- *Type:* string[]

Format of each array value: a string representation of an ASN numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `DynamicLocations`<sup>Optional</sup> <a name="DynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations"></a>

```csharp
public string[] DynamicLocations { get; set; }
```

- *Type:* string[]

Array of locations ISO-3166-1(2). Format code: countryCode OR countryCode-regionCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `DynamicProxyType`<sup>Optional</sup> <a name="DynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType"></a>

```csharp
public string DynamicProxyType { get; set; }
```

- *Type:* string

Type of proxy being controlled by this network zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways"></a>

```csharp
public string[] Gateways { get; set; }
```

- *Type:* string[]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Proxies`<sup>Optional</sup> <a name="Proxies" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies"></a>

```csharp
public string[] Proxies { get; set; }
```

- *Type:* string[]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Network Status - can either be ACTIVE or INACTIVE only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#status NetworkZone#status}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage"></a>

```csharp
public string Usage { get; set; }
```

- *Type:* string

Zone's purpose: POLICY or BLOCKLIST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/network_zone#usage NetworkZone#usage}

---



