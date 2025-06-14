# `networkZone` Submodule <a name="`networkZone` Submodule" id="@cdktf/provider-okta.networkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkZone <a name="NetworkZone" id="@cdktf/provider-okta.networkZone.NetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZone;

NetworkZone.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .asns(java.util.List<java.lang.String>)
//  .dynamicLocations(java.util.List<java.lang.String>)
//  .dynamicLocationsExclude(java.util.List<java.lang.String>)
//  .dynamicProxyType(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ipServiceCategoriesExclude(java.util.List<java.lang.String>)
//  .ipServiceCategoriesInclude(java.util.List<java.lang.String>)
//  .proxies(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .usage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | List of asns included. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocations">dynamicLocations</a></code> | <code>java.util.List<java.lang.String></code> | Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>java.util.List<java.lang.String></code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicProxyType">dynamicProxyType</a></code> | <code>java.lang.String</code> | Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>java.util.List<java.lang.String></code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>java.util.List<java.lang.String></code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.proxies">proxies</a></code> | <code>java.util.List<java.lang.String></code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Network Status - can either be `ACTIVE` or `INACTIVE` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.usage">usage</a></code> | <code>java.lang.String</code> | Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#name NetworkZone#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#type NetworkZone#type}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.asns"></a>

- *Type:* java.util.List<java.lang.String>

List of asns included.

Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `dynamicLocations`<sup>Optional</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocations"></a>

- *Type:* java.util.List<java.lang.String>

Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `dynamicLocationsExclude`<sup>Optional</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocationsExclude"></a>

- *Type:* java.util.List<java.lang.String>

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}

---

##### `dynamicProxyType`<sup>Optional</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicProxyType"></a>

- *Type:* java.lang.String

Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`.

Use with type `DYNAMIC`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.gateways"></a>

- *Type:* java.util.List<java.lang.String>

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipServiceCategoriesExclude`<sup>Optional</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesExclude"></a>

- *Type:* java.util.List<java.lang.String>

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}

---

##### `ipServiceCategoriesInclude`<sup>Optional</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesInclude"></a>

- *Type:* java.util.List<java.lang.String>

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.proxies"></a>

- *Type:* java.util.List<java.lang.String>

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Network Status - can either be `ACTIVE` or `INACTIVE` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#status NetworkZone#status}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.usage"></a>

- *Type:* java.lang.String

Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#usage NetworkZone#usage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations">resetDynamicLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude">resetDynamicLocationsExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType">resetDynamicProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude">resetIpServiceCategoriesExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude">resetIpServiceCategoriesInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetProxies">resetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetUsage">resetUsage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.networkZone.NetworkZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-okta.networkZone.NetworkZone.resetAsns"></a>

```java
public void resetAsns()
```

##### `resetDynamicLocations` <a name="resetDynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations"></a>

```java
public void resetDynamicLocations()
```

##### `resetDynamicLocationsExclude` <a name="resetDynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude"></a>

```java
public void resetDynamicLocationsExclude()
```

##### `resetDynamicProxyType` <a name="resetDynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType"></a>

```java
public void resetDynamicProxyType()
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-okta.networkZone.NetworkZone.resetGateways"></a>

```java
public void resetGateways()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.networkZone.NetworkZone.resetId"></a>

```java
public void resetId()
```

##### `resetIpServiceCategoriesExclude` <a name="resetIpServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude"></a>

```java
public void resetIpServiceCategoriesExclude()
```

##### `resetIpServiceCategoriesInclude` <a name="resetIpServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude"></a>

```java
public void resetIpServiceCategoriesInclude()
```

##### `resetProxies` <a name="resetProxies" id="@cdktf/provider-okta.networkZone.NetworkZone.resetProxies"></a>

```java
public void resetProxies()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.networkZone.NetworkZone.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-okta.networkZone.NetworkZone.resetUsage"></a>

```java
public void resetUsage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZone;

NetworkZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZone;

NetworkZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZone;

NetworkZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZone;

NetworkZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput">asnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput">dynamicLocationsExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput">dynamicLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput">dynamicProxyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput">gatewaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput">ipServiceCategoriesExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput">ipServiceCategoriesIncludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput">proxiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput">usageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations">dynamicLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType">dynamicProxyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxies">proxies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.networkZone.NetworkZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZone.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZone.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.networkZone.NetworkZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput"></a>

```java
public java.util.List<java.lang.String> getAsnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicLocationsExcludeInput`<sup>Optional</sup> <a name="dynamicLocationsExcludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput"></a>

```java
public java.util.List<java.lang.String> getDynamicLocationsExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicLocationsInput`<sup>Optional</sup> <a name="dynamicLocationsInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput"></a>

```java
public java.util.List<java.lang.String> getDynamicLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicProxyTypeInput`<sup>Optional</sup> <a name="dynamicProxyTypeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput"></a>

```java
public java.lang.String getDynamicProxyTypeInput();
```

- *Type:* java.lang.String

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput"></a>

```java
public java.util.List<java.lang.String> getGatewaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipServiceCategoriesExcludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesExcludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipServiceCategoriesIncludeInput`<sup>Optional</sup> <a name="ipServiceCategoriesIncludeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proxiesInput`<sup>Optional</sup> <a name="proxiesInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput"></a>

```java
public java.util.List<java.lang.String> getProxiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput"></a>

```java
public java.lang.String getUsageInput();
```

- *Type:* java.lang.String

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicLocations`<sup>Required</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations"></a>

```java
public java.util.List<java.lang.String> getDynamicLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicLocationsExclude`<sup>Required</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude"></a>

```java
public java.util.List<java.lang.String> getDynamicLocationsExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dynamicProxyType`<sup>Required</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType"></a>

```java
public java.lang.String getDynamicProxyType();
```

- *Type:* java.lang.String

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipServiceCategoriesExclude`<sup>Required</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipServiceCategoriesInclude`<sup>Required</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxies"></a>

```java
public java.util.List<java.lang.String> getProxies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZone.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkZoneConfig <a name="NetworkZoneConfig" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.network_zone.NetworkZoneConfig;

NetworkZoneConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .asns(java.util.List<java.lang.String>)
//  .dynamicLocations(java.util.List<java.lang.String>)
//  .dynamicLocationsExclude(java.util.List<java.lang.String>)
//  .dynamicProxyType(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ipServiceCategoriesExclude(java.util.List<java.lang.String>)
//  .ipServiceCategoriesInclude(java.util.List<java.lang.String>)
//  .proxies(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .usage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | List of asns included. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations">dynamicLocations</a></code> | <code>java.util.List<java.lang.String></code> | Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude">dynamicLocationsExclude</a></code> | <code>java.util.List<java.lang.String></code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType">dynamicProxyType</a></code> | <code>java.lang.String</code> | Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude">ipServiceCategoriesExclude</a></code> | <code>java.util.List<java.lang.String></code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude">ipServiceCategoriesInclude</a></code> | <code>java.util.List<java.lang.String></code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies">proxies</a></code> | <code>java.util.List<java.lang.String></code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status">status</a></code> | <code>java.lang.String</code> | Network Status - can either be `ACTIVE` or `INACTIVE` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage">usage</a></code> | <code>java.lang.String</code> | Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#name NetworkZone#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#type NetworkZone#type}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

List of asns included.

Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `dynamicLocations`<sup>Optional</sup> <a name="dynamicLocations" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations"></a>

```java
public java.util.List<java.lang.String> getDynamicLocations();
```

- *Type:* java.util.List<java.lang.String>

Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `dynamicLocationsExclude`<sup>Optional</sup> <a name="dynamicLocationsExclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude"></a>

```java
public java.util.List<java.lang.String> getDynamicLocationsExclude();
```

- *Type:* java.util.List<java.lang.String>

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}

---

##### `dynamicProxyType`<sup>Optional</sup> <a name="dynamicProxyType" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType"></a>

```java
public java.lang.String getDynamicProxyType();
```

- *Type:* java.lang.String

Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`.

Use with type `DYNAMIC`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipServiceCategoriesExclude`<sup>Optional</sup> <a name="ipServiceCategoriesExclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesExclude();
```

- *Type:* java.util.List<java.lang.String>

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}

---

##### `ipServiceCategoriesInclude`<sup>Optional</sup> <a name="ipServiceCategoriesInclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```java
public java.util.List<java.lang.String> getIpServiceCategoriesInclude();
```

- *Type:* java.util.List<java.lang.String>

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies"></a>

```java
public java.util.List<java.lang.String> getProxies();
```

- *Type:* java.util.List<java.lang.String>

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Network Status - can either be `ACTIVE` or `INACTIVE` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#status NetworkZone#status}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/network_zone#usage NetworkZone#usage}

---



